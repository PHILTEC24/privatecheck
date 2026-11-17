const express = require('express');
const path = require('path');
const cors = require('cors');
const { assess } = require('./engine');
const db = require('./db');
const { PROFILES } = require('./synthetic');

const app = express();
app.use(cors());
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/assess', (req, res) => {
  const answers = (req.body && req.body.answers) || {};
  const result = assess(answers);
  db.record(result.level, [...result.redFlags, ...result.moderateFlags].map(f => f.code));
  res.json(result);
});

app.get('/api/stats', (_req, res) => res.json(db.stats()));

app.get('/api/validation', (_req, res) => {
  const rows = PROFILES.map(p => {
    const predicted = assess(p.a).level;
    return { id: p.id, note: p.note, expected: p.e, predicted, correct: p.e === predicted };
  });
  const urgent = rows.filter(r => r.expected === 'urgent');
  const urgentHit = urgent.filter(r => r.predicted === 'urgent').length;
  res.json({
    profiles: rows,
    summary: {
      total: rows.length,
      agreement: rows.filter(r => r.correct).length / rows.length,
      urgentSensitivity: urgent.length ? urgentHit / urgent.length : null,
      urgentCases: urgent.length
    },
    method: 'Labels derived from published clinical guideline thresholds. Measures implementation fidelity, not clinical validity.'
  });
});

const dist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(dist));
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(dist, 'index.html'), err => err && next());
});

app.listen(process.env.PORT || 3001, () => console.log('Server up on :' + (process.env.PORT || 3001)));
