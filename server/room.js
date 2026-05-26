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

// ============================================================
// RACE MODE — pairs 2 players, broadcasts each other's score
// ============================================================
const raceQueue = [];          // waiting players
const raceRooms = new Map();   // roomId → { players: [{ws,id,name}, ...], startedAt }
let raceRoomId = 1;
let racePlayerId = 1;

function raceSend(p, msg) {
  if (p.ws.readyState === 1) p.ws.send(JSON.stringify(msg));
}
function raceBroadcast(room, msg, exceptId = null) {
  const data = JSON.stringify(msg);
  for (const p of room.players) {
    if (p.id === exceptId) continue;
    if (p.ws.readyState === 1) p.ws.send(data);
  }
}

function attachRaceWS(httpServer, basePath = '') {
  const wss = new WebSocketServer({ server: httpServer, path: basePath + '/ws-race', noServer: false });

  wss.on('connection', (ws) => {
    const player = { id: racePlayerId++, ws, name: 'Khách', score: 0, correct: 0, total: 0, finished: false, room: null };

    ws.on('message', (raw) => {
      let msg; try { msg = JSON.parse(raw); } catch { return; }

      if (msg.type === 'join') {
        player.name = String(msg.name || '').trim().slice(0, 32) || ('Khách ' + player.id);
        // Try to pair with someone in queue
        if (raceQueue.length > 0) {
          const opponent = raceQueue.shift();
          if (opponent.ws.readyState !== 1) {
            raceQueue.push(player); return raceSend(player, { type: 'waiting' });
          }
          const room = { id: raceRoomId++, players: [opponent, player], startedAt: Date.now() };
          opponent.room = player.room = room;
          raceRooms.set(room.id, room);
          // Notify both
          raceSend(opponent, { type: 'matched', opponentName: player.name, opponentId: player.id, youId: opponent.id, roomId: room.id });
          raceSend(player,   { type: 'matched', opponentName: opponent.name, opponentId: opponent.id, youId: player.id, roomId: room.id });
        } else {
          raceQueue.push(player);
          raceSend(player, { type: 'waiting' });
        }
      } else if (msg.type === 'progress' && player.room) {
        player.score = +msg.score || 0;
        player.correct = +msg.correct || 0;
        player.total = +msg.total || 0;
        raceBroadcast(player.room, {
          type: 'opponent', id: player.id, score: player.score, correct: player.correct, total: player.total,
        }, player.id);
      } else if (msg.type === 'finish' && player.room) {
        player.finished = true;
        player.score = +msg.score || player.score;
        player.correct = +msg.correct || player.correct;
        player.total = +msg.total || player.total;
        raceBroadcast(player.room, { type: 'opponent-finished', id: player.id, score: player.score });
        // Determine winner once both finish OR opponent timed out
        const allFinished = player.room.players.every(p => p.finished);
        if (allFinished) {
          const sorted = [...player.room.players].sort((a, b) =>
            (b.correct / b.total) - (a.correct / a.total) || b.score - a.score
          );
          const winnerId = sorted[0].id;
          for (const p of player.room.players) {
            raceSend(p, { type: 'race-over', winnerId, results: sorted.map(s => ({ id: s.id, name: s.name, score: s.score, correct: s.correct, total: s.total })) });
          }
          raceRooms.delete(player.room.id);
        }
      }
    });

    ws.on('close', () => {
      // Remove from queue
      const qi = raceQueue.indexOf(player);
      if (qi >= 0) raceQueue.splice(qi, 1);
      // Notify opponent if in a room
      if (player.room) {
        raceBroadcast(player.room, { type: 'opponent-left', id: player.id }, player.id);
        // Remove room — the lone player will get notified to bail out
        raceRooms.delete(player.room.id);
      }
    });
  });

  console.log(`[race] WebSocket server attached at ${basePath || ''}/ws-race`);
}

export function attachRoom(httpServer, basePath = '') {
  attachRaceWS(httpServer, basePath);
  const wss = new WebSocketServer({ server: httpServer, path: basePath + '/ws' });
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

  console.log(`[room] WebSocket server attached at ${basePath || ''}/ws`);
}
