// Shared multiplayer room for the Metaverse mode.
// Server holds canonical state of medicines (positions + ownership + slot),
// players send cursor updates + grab/move/release/snap requests.

import { WebSocketServer } from 'ws';

const ROOM_MEDICINES = [
  { id: 'amox', name: 'AMOXICILLIN', category: 'Kháng sinh', color: '#43a047' },
  { id: 'asp',  name: 'ASPIRIN',     category: 'Tim mạch',   color: '#e53935' },
  { id: 'sme',  name: 'SMECTA',      category: 'Tiêu hóa',   color: '#fb8c00' },
  { id: 'par',  name: 'PARACETAMOL', category: 'Giảm đau',   color: '#1e88e5' },
];

const ROOM_SLOTS = ROOM_MEDICINES.map((m, i) => ({
  id: 'slot-' + i,
  category: m.category,
  pos: { x: -3 + i * 2, y: 2.5, z: -2 },
}));

const PLAYER_COLORS = [
  '#ef4444', '#f59e0b', '#10b981', '#3b82f6',
  '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16',
];

let nextId = 1;

function freshState() {
  // Initial medicine layout — sit on table inside the carton area
  // Categories shuffled so the visual order on table doesn't match slot order
  const shuffled = [...ROOM_MEDICINES];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    meds: shuffled.map((m, i) => ({
      ...m,
      pos: { x: -3 + i * 2, y: 1, z: 2 },
      ownerId: null,
      slotId: null,
    })),
    cartonOpen: false,
  };
}

export function attachRoom(httpServer) {
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  const players = new Map();   // id → { id, ws, name, color, cursor }
  let state = freshState();

  function snapshot() {
    return {
      players: [...players.values()].map(p => ({
        id: p.id, name: p.name, color: p.color, cursor: p.cursor,
      })),
      meds: state.meds,
      slots: ROOM_SLOTS,
      cartonOpen: state.cartonOpen,
    };
  }

  function send(p, msg) {
    if (p.ws.readyState === 1) p.ws.send(JSON.stringify(msg));
  }

  function broadcast(msg, exceptId = null) {
    const data = JSON.stringify(msg);
    for (const p of players.values()) {
      if (p.id === exceptId) continue;
      if (p.ws.readyState === 1) p.ws.send(data);
    }
  }

  wss.on('connection', (ws) => {
    const id = nextId++;
    const color = PLAYER_COLORS[(id - 1) % PLAYER_COLORS.length];
    const player = {
      id, ws, color,
      name: 'Khách ' + id,
      cursor: { x: 0, y: 1, z: 1, pinching: false },
    };
    players.set(id, player);

    ws.on('message', (raw) => {
      let msg;
      try { msg = JSON.parse(raw); } catch { return; }

      switch (msg.type) {
        case 'join': {
          if (typeof msg.name === 'string' && msg.name.trim()) {
            player.name = msg.name.trim().slice(0, 32);
          }
          send(player, { type: 'welcome', id, color, snapshot: snapshot() });
          broadcast({ type: 'join', player: { id, name: player.name, color, cursor: player.cursor } }, id);
          break;
        }
        case 'cursor': {
          player.cursor = {
            x: +msg.x || 0, y: +msg.y || 0, z: +msg.z || 0,
            pinching: !!msg.pinching,
          };
          broadcast({ type: 'cursor', id, ...player.cursor }, id);
          break;
        }
        case 'open-carton': {
          if (!state.cartonOpen) {
            state.cartonOpen = true;
            broadcast({ type: 'open-carton' });
          }
          break;
        }
        case 'grab': {
          const m = state.meds.find(x => x.id === msg.medId);
          if (m && !m.ownerId) {
            m.ownerId = id;
            m.slotId = null;
            broadcast({ type: 'grab', medId: m.id, ownerId: id });
          }
          break;
        }
        case 'move': {
          const m = state.meds.find(x => x.id === msg.medId);
          if (m && m.ownerId === id) {
            m.pos = { x: +msg.x || 0, y: +msg.y || 0, z: +msg.z || 0 };
            broadcast({ type: 'medpos', medId: m.id, pos: m.pos }, id);
          }
          break;
        }
        case 'release': {
          const m = state.meds.find(x => x.id === msg.medId);
          if (m && m.ownerId === id) {
            m.ownerId = null;
            broadcast({ type: 'release', medId: m.id, pos: m.pos });
          }
          break;
        }
        case 'snap': {
          const m = state.meds.find(x => x.id === msg.medId);
          const slot = ROOM_SLOTS.find(s => s.id === msg.slotId);
          if (m && slot && (m.ownerId === id || !m.ownerId)) {
            m.ownerId = null;
            m.slotId = slot.id;
            m.pos = { ...slot.pos };
            broadcast({ type: 'snap', medId: m.id, slotId: m.slotId, pos: m.pos });
          }
          break;
        }
        case 'reset': {
          state = freshState();
          broadcast({ type: 'reset', snapshot: snapshot() });
          break;
        }
      }
    });

    ws.on('close', () => {
      // Drop any locks held by this player
      for (const m of state.meds) {
        if (m.ownerId === id) m.ownerId = null;
      }
      players.delete(id);
      broadcast({ type: 'leave', id });
    });
  });

  // Heartbeat to detect zombie connections
  setInterval(() => {
    for (const p of players.values()) {
      if (p.ws.readyState !== 1) {
        players.delete(p.id);
        broadcast({ type: 'leave', id: p.id });
      }
    }
  }, 15000);

  console.log('[room] WebSocket server attached at /ws');
}
