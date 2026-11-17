const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, 'data', 'assessments.json');
const ensure = () => fs.existsSync(path.dirname(FILE)) || fs.mkdirSync(path.dirname(FILE), { recursive: true });
const read = () => { try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; } };
const write = rows => { ensure(); fs.writeFileSync(FILE, JSON.stringify(rows)); };

exports.record = (level, codes) => {
  const rows = read();
  rows.push({ level, codes, ts: new Date().toISOString() });
  write(rows);
};
exports.stats = () => {
  const rows = read();
  const byLevel = { low: 0, moderate: 0, urgent: 0 };
  const byCode = {};
  for (const r of rows) {
    if (byLevel[r.level] !== undefined) byLevel[r.level]++;
    for (const c of r.codes || []) byCode[c] = (byCode[c] || 0) + 1;
  }
  return { total: rows.length, byLevel, byCode };
};
