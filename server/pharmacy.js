// Pharmacy AI port — session store + chat / action / score routes.
// Logic ported 1-1 from github.com/Lampx83/Pharmacy-AI (src/lib/segue/*, src/lib/session/store.ts).
import express from 'express';
import { ollamaGenerate } from './ai.js';
import { SCENARIOS } from '../public/js/pharmacy/scenarios.js';
import { computeScore } from '../public/js/pharmacy/score.js';

const sessions = new Map();

function createSession(moduleId) {
  const id = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  const s = {
    id, moduleId,
    startedAt: Date.now(),
    messages: [],
    actions: [],
    context: {}
  };
  sessions.set(id, s);
  return s;
}

function getSession(id) { return sessions.get(id); }
function saveSession(s) { sessions.set(s.id, s); }

// Build conversation prompt for Ollama. Matches the OpenAI persona pattern used in
// upstream src/lib/llm/openai.ts but uses /generate (string prompt) for our local model.
function buildPrompt(persona, history, userMessage) {
  const lines = [];
  for (const m of history.slice(-12)) {
    if (m.role === 'user') lines.push(`Dược sĩ: ${m.content}`);
    else if (m.role === 'npc') lines.push(`NPC: ${m.content}`);
  }
  lines.push(`Dược sĩ: ${userMessage}`);
  lines.push(`NPC:`);
  return lines.join('\n');
}

// Fallback NPC responses when Ollama unavailable — mirrors src/lib/llm/stub.ts.
function stubReply(moduleId) {
  if (moduleId === 'gpp') return 'Em vẫn cứ muốn xin ít kháng sinh thôi, khỏi nhanh em đi làm.';
  if (moduleId === 'hospital') return 'Dược sĩ, đơn của tôi có gì sai à? Bệnh nhân đang đợi.';
  return 'Em cứ trình bày tiếp đi, tôi đang nghe.';
}

async function npcReply(scenario, history, userMessage) {
  const prompt = buildPrompt(scenario.npcPersona, history, userMessage);
  try {
    const reply = await ollamaGenerate({
      prompt,
      system: scenario.npcPersona,
      temperature: 0.7,
      maxTokens: 200
    });
    return reply || stubReply(scenario.id);
  } catch (err) {
    console.error('[pharmacy] ollama failed, using stub:', err.message);
    return stubReply(scenario.id);
  }
}

export function attachPharmacy(r) {
  // POST /api/pharmacy/session — create session
  r.post('/api/pharmacy/session', express.json(), (req, res) => {
    const moduleId = req.body?.moduleId || 'gpp';
    if (!SCENARIOS[moduleId]) return res.status(400).json({ error: 'invalid moduleId' });
    const s = createSession(moduleId);
    res.json({ session: s, scenario: SCENARIOS[moduleId] });
  });

  // POST /api/pharmacy/chat — user → NPC
  r.post('/api/pharmacy/chat', express.json({ limit: '256kb' }), async (req, res) => {
    const { sessionId, message } = req.body || {};
    const s = getSession(sessionId);
    if (!s) return res.status(404).json({ error: 'session not found' });
    const scenario = SCENARIOS[s.moduleId];

    const text = String(message || '').trim();
    if (!text) return res.status(400).json({ error: 'empty message' });
    s.messages.push({ role: 'user', content: text, ts: Date.now() });

    // Detect pregnancy disclosure for fatal-error context.
    if (/(có thai|mang thai)/i.test(s.messages.map(m => m.content).join(' '))) {
      s.context.pregnant = true;
    }

    const reply = await npcReply(scenario, s.messages, text);
    s.messages.push({ role: 'npc', content: reply, ts: Date.now() });
    saveSession(s);
    res.json({ session: s });
  });

  // POST /api/pharmacy/action — record a 3D-scene action
  r.post('/api/pharmacy/action', express.json(), (req, res) => {
    const { sessionId, type, payload } = req.body || {};
    const s = getSession(sessionId);
    if (!s) return res.status(404).json({ error: 'session not found' });
    if (!type) return res.status(400).json({ error: 'missing type' });
    s.actions.push({ type, payload: payload || {}, ts: Date.now() });
    saveSession(s);
    res.json({ session: s });
  });

  // POST /api/pharmacy/score — finalize + compute SEGUE score
  r.post('/api/pharmacy/score', express.json(), (req, res) => {
    const { sessionId } = req.body || {};
    const s = getSession(sessionId);
    if (!s) return res.status(404).json({ error: 'session not found' });
    s.endedAt = Date.now();
    saveSession(s);
    const score = computeScore(s);
    res.json({ session: s, score });
  });

  // GET /api/pharmacy/session/:id — debug/recover
  r.get('/api/pharmacy/session/:id', (req, res) => {
    const s = getSession(req.params.id);
    if (!s) return res.status(404).json({ error: 'not found' });
    res.json({ session: s });
  });
}
