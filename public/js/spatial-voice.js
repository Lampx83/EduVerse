/* GAP 7 — Spatial VoIP (WebRTC mesh)
 *
 * Sử dụng:
 *   import { spatialVoice } from './js/spatial-voice.js';
 *   await spatialVoice.connect({ roomCode: 'A3X9KL', name: 'Lâm' });
 *   spatialVoice.updatePosition({ x, y, z });   // tự gọi mỗi tick để attenuate
 *   spatialVoice.muteSelf(true/false);
 *   spatialVoice.leave();
 *
 * Kiến trúc:
 *   - Mỗi peer mở 1 WebSocket riêng tới /ws-orchestrate (KHÔNG dùng chung với
 *     orchestrate-bridge.js vì roles tách biệt — voice cần signaling trực tiếp).
 *   - Khi local mic được cấp + announce-voice → server thông báo các peer khác.
 *   - Mỗi peer khởi tạo RTCPeerConnection theo cặp. Nếu peerId < myId thì local
 *     làm offerer (tránh glare).
 *   - Audio remote element được tạo per peer. Volume = f(distance) với
 *     maxDistance: tắt hẳn khi >12m, max 1.0 khi <2m, fade tuyến tính.
 *
 * STUN-only: dùng Google STUN free. TURN không cần cho LAN/IPv6 thông thường.
 */

const STUN = [{ urls: 'stun:stun.l.google.com:19302' }];

function wsUrl() {
  const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const base = location.pathname.includes('/ps/') ? '/ps' : '';
  return `${proto}//${location.host}${base}/ws-orchestrate`;
}

class SpatialVoice {
  constructor() {
    this.ws = null;
    this.myId = null;
    this.peers = new Map(); // peerId → { pc, remoteAudio, name, role, pos, gain }
    this.localStream = null;
    this.muted = true;
    this.audioCtx = null;
    this.listenerPos = { x: 0, y: 0, z: 0 };
    this.roomCode = null;
    this.name = '';
    this.role = 'student';
    this.maxDistance = 12;  // m — past this, mute completely
    this.minDistance = 2;   // m — full volume within
    this.onStateChange = () => {};
  }

  async connect({ roomCode, name, role = 'student' }) {
    if (!roomCode) throw new Error('roomCode required');
    this.roomCode = roomCode; this.name = name || 'Khách'; this.role = role;
    // 1. Get mic
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        video: false,
      });
      // Start muted by default — user must press push-to-talk or unmute
      for (const t of this.localStream.getAudioTracks()) t.enabled = false;
    } catch (e) {
      throw new Error('Không cấp được mic: ' + e.message);
    }

    // 2. Open WS for signaling
    this.ws = new WebSocket(wsUrl());
    await new Promise((res, rej) => {
      const to = setTimeout(() => rej(new Error('WS timeout')), 6000);
      this.ws.onopen = () => { clearTimeout(to); res(); };
      this.ws.onerror = () => { clearTimeout(to); rej(new Error('WS error')); };
    });

    this.ws.send(JSON.stringify({ type: 'join', role: this.role, name: this.name, classCode: this.roomCode }));
    this.ws.send(JSON.stringify({ type: 'voice-announce' }));

    this.ws.onmessage = (ev) => this._onMsg(JSON.parse(ev.data));
    this._notify();
  }

  _onMsg(m) {
    switch (m.type) {
      case 'welcome': {
        this.myId = m.you.id;
        break;
      }
      case 'voice-peer-list': {
        // Existing peers — we offer to each
        for (const p of m.peers || []) this._initPeer(p, /*isOfferer*/ this.myId < p.id);
        break;
      }
      case 'voice-peer-joined': {
        this._initPeer({ id: m.peerId, name: m.peerName, role: m.peerRole }, /*isOfferer*/ this.myId < m.peerId);
        break;
      }
      case 'voice-peer-left': {
        this._closePeer(m.peerId);
        break;
      }
      case 'voice-signal': {
        this._onSignal(m.fromId, m.fromName, m.signal);
        break;
      }
      case 'voice-position': {
        const p = this.peers.get(m.peerId);
        if (p) {
          p.pos = m.pos;
          this._updateGain(m.peerId);
        }
        break;
      }
    }
  }

  async _initPeer({ id, name, role }, isOfferer) {
    if (this.peers.has(id)) return;
    const pc = new RTCPeerConnection({ iceServers: STUN });

    // Add local audio tracks
    for (const t of this.localStream.getAudioTracks()) pc.addTrack(t, this.localStream);

    // Remote audio element + per-peer gain
    const remoteStream = new MediaStream();
    const audio = document.createElement('audio');
    audio.autoplay = true; audio.playsInline = true;
    audio.srcObject = remoteStream;
    audio.volume = 0.0;
    document.body.appendChild(audio);

    const peer = { pc, remoteAudio: audio, remoteStream, name, role, pos: null, gain: 0 };
    this.peers.set(id, peer);

    pc.ontrack = (ev) => {
      ev.streams[0].getTracks().forEach(t => remoteStream.addTrack(t));
      this._updateGain(id);
    };
    pc.onicecandidate = (ev) => {
      if (ev.candidate) this._send({ type: 'voice-signal', targetId: id, signal: { kind: 'ice', candidate: ev.candidate } });
    };

    if (isOfferer) {
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      this._send({ type: 'voice-signal', targetId: id, signal: { kind: 'offer', sdp: offer } });
    }
    this._notify();
  }

  async _onSignal(fromId, fromName, signal) {
    let peer = this.peers.get(fromId);
    if (!peer) {
      // We get a signal before peer-list — accept anyway
      await this._initPeer({ id: fromId, name: fromName, role: '' }, /*isOfferer*/ false);
      peer = this.peers.get(fromId);
    }
    const pc = peer.pc;
    try {
      if (signal.kind === 'offer') {
        await pc.setRemoteDescription(signal.sdp);
        const ans = await pc.createAnswer();
        await pc.setLocalDescription(ans);
        this._send({ type: 'voice-signal', targetId: fromId, signal: { kind: 'answer', sdp: ans } });
      } else if (signal.kind === 'answer') {
        await pc.setRemoteDescription(signal.sdp);
      } else if (signal.kind === 'ice') {
        await pc.addIceCandidate(signal.candidate);
      }
    } catch (e) {
      console.warn('[voice] signal error', e);
    }
  }

  _closePeer(id) {
    const p = this.peers.get(id);
    if (!p) return;
    try { p.pc.close(); } catch {}
    try { p.remoteAudio.remove(); } catch {}
    this.peers.delete(id);
    this._notify();
  }

  updatePosition({ x, y, z }) {
    this.listenerPos = { x: +x || 0, y: +y || 0, z: +z || 0 };
    this._send({ type: 'voice-position', x, y, z });
    for (const id of this.peers.keys()) this._updateGain(id);
  }

  _updateGain(peerId) {
    const peer = this.peers.get(peerId);
    if (!peer || !peer.pos) return;
    const dx = peer.pos.x - this.listenerPos.x;
    const dy = peer.pos.y - this.listenerPos.y;
    const dz = peer.pos.z - this.listenerPos.z;
    const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
    let g;
    if (d <= this.minDistance) g = 1.0;
    else if (d >= this.maxDistance) g = 0.0;
    else g = 1 - (d - this.minDistance) / (this.maxDistance - this.minDistance);
    peer.gain = g;
    peer.remoteAudio.volume = Math.max(0, Math.min(1, g));
  }

  muteSelf(mute) {
    this.muted = !!mute;
    for (const t of (this.localStream?.getAudioTracks() || [])) t.enabled = !this.muted;
    this._notify();
  }

  leave() {
    if (this.ws) {
      try { this.ws.send(JSON.stringify({ type: 'voice-leave' })); } catch {}
      try { this.ws.close(); } catch {}
    }
    for (const id of [...this.peers.keys()]) this._closePeer(id);
    if (this.localStream) {
      for (const t of this.localStream.getTracks()) t.stop();
      this.localStream = null;
    }
    this.ws = null; this.myId = null;
    this._notify();
  }

  _send(m) {
    if (this.ws?.readyState === 1) this.ws.send(JSON.stringify(m));
  }
  _notify() {
    try {
      this.onStateChange({
        connected: !!this.ws,
        myId: this.myId,
        muted: this.muted,
        peers: [...this.peers.entries()].map(([id, p]) => ({
          id, name: p.name, role: p.role, gain: p.gain, pos: p.pos,
        })),
      });
    } catch {}
  }
}

export const spatialVoice = new SpatialVoice();

// Auto-expose globally for HTML scripts
if (typeof window !== 'undefined') {
  window.EduSpatialVoice = spatialVoice;
}
