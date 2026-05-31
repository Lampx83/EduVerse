// Driver Postgres + helper. Mục tiêu: cho db.js viết SQL gần như y hệt cú pháp
// better-sqlite3 (named params @foo), để Phase 2 refactor caller chỉ cần thêm
// `await` chứ không phải viết lại SQL.
//
// pool: 1 instance dùng chung toàn process. max=20 — đủ cho 30k MAU với reuse,
// bump khi EXPLAIN cho thấy thắt cổ chai (Phase 5).
//
// bindNamed: convert "@name" → "$1, $2" + mảng params đúng thứ tự. Nếu cùng tên
// dùng nhiều chỗ thì tái dùng cùng placeholder (vd `..., @t, @t)` → `..., $1, $1`).

import pg from 'pg';

const { Pool, types } = pg;

// BIGINT (OID 20) mặc định trả String để tránh mất chính xác >2^53. Tizia id range
// (users, attempts) đến hàng tỷ vẫn an toàn dưới Number.MAX_SAFE_INTEGER (~9e15) →
// parse sang Number để caller cũ so sánh === bằng số không phải sửa hết.
types.setTypeParser(20, (v) => v == null ? null : Number(v));

if (!process.env.DATABASE_URL) {
  console.warn('[pg] DATABASE_URL chưa set — set trong .env trước khi chạy');
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.PG_POOL_MAX) || 20,
  idleTimeoutMillis: 30_000,
  // statement_timeout chống query treo: 30s mặc định. Báo cáo/migrate dài hơn → set per-query.
  statement_timeout: Number(process.env.PG_STATEMENT_TIMEOUT_MS) || 30_000,
});

pool.on('error', (err) => {
  console.error('[pg] idle client error', err);
});

const NAMED_PARAM_RE = /@([a-zA-Z_][a-zA-Z0-9_]*)/g;

export function bindNamed(sql, params) {
  if (!params || Array.isArray(params)) return { text: sql, values: params || [] };
  const map = new Map();
  const values = [];
  const text = sql.replace(NAMED_PARAM_RE, (_, name) => {
    if (!map.has(name)) {
      values.push(params[name]);
      map.set(name, values.length);
    }
    return `$${map.get(name)}`;
  });
  return { text, values };
}

async function runQuery(executor, sql, params) {
  const { text, values } = bindNamed(sql, params);
  return executor.query(text, values);
}

/** Trả raw QueryResult ({rows, rowCount, ...}). */
export async function query(sql, params) {
  return runQuery(pool, sql, params);
}

/** Trả 1 row đầu hoặc null. Tương đương stmt.get(). */
export async function one(sql, params) {
  const r = await query(sql, params);
  return r.rows[0] || null;
}

/** Trả mảng row. Tương đương stmt.all(). */
export async function many(sql, params) {
  const r = await query(sql, params);
  return r.rows;
}

/** Chạy INSERT/UPDATE/DELETE. Trả { rowCount, rows } (rows = RETURNING nếu có). */
export async function exec(sql, params) {
  const r = await query(sql, params);
  return { rowCount: r.rowCount, rows: r.rows };
}

/**
 * Transaction. Callback nhận đối tượng client có cùng API (query/one/many/exec).
 * Tự BEGIN/COMMIT, ROLLBACK nếu callback throw.
 */
export async function tx(fn) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const api = {
      query: (sql, params) => runQuery(client, sql, params),
      one:   async (sql, params) => (await runQuery(client, sql, params)).rows[0] || null,
      many:  async (sql, params) => (await runQuery(client, sql, params)).rows,
      exec:  async (sql, params) => { const r = await runQuery(client, sql, params); return { rowCount: r.rowCount, rows: r.rows }; },
    };
    const result = await fn(api);
    await client.query('COMMIT');
    return result;
  } catch (e) {
    try { await client.query('ROLLBACK'); } catch {}
    throw e;
  } finally {
    client.release();
  }
}

export async function close() {
  await pool.end();
}
