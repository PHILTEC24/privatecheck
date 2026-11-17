const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

let ready = false;

async function init() {
  if (ready) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS assessments (
      id         SERIAL PRIMARY KEY,
      level      TEXT NOT NULL,
      codes      TEXT[] NOT NULL DEFAULT '{}',
      ts         TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);
  ready = true;
}

exports.record = async (level, codes) => {
  await init();
  await pool.query(
    'INSERT INTO assessments (level, codes) VALUES ($1, $2)',
    [level, codes]
  );
};

exports.stats = async () => {
  await init();
  const { rows } = await pool.query(`
    SELECT level, codes FROM assessments
  `);
  const byLevel = { low: 0, moderate: 0, urgent: 0 };
  const byCode = {};
  for (const r of rows) {
    if (byLevel[r.level] !== undefined) byLevel[r.level]++;
    for (const c of r.codes || []) byCode[c] = (byCode[c] || 0) + 1;
  }
  return { total: rows.length, byLevel, byCode };
};
