const RED = [
  { code: 'MUMPS', q: 'mumps', v: 'yes', label: 'History of mumps orchitis after puberty', level: 'urgent' },
  { code: 'TESTICULAR', q: 'testicular_pain', v: 'yes', label: 'Current testicular pain, swelling, or lump', level: 'urgent' }
];
const MOD = [
  { code: 'VARICOCELE', q: 'varicocele', v: 'yes', label: 'Known varicocele' },
  { code: 'METABOLIC', q: 'metabolic', v: 'yes', label: 'Metabolic risk (diabetes / obesity / hypertension)' },
  { code: 'LIFESTYLE', q: 'lifestyle', v: 'yes', label: 'Lifestyle exposure (smoking / steroids / heat)' },
  { code: 'INFERTILITY', q: 'trying', v: 'yes', label: '12+ months trying to conceive without success' }
];

function assess(answers = {}) {
  const red = RED.filter(r => answers[r.q] === r.v);
  const mod = MOD.filter(r => answers[r.q] === r.v);
  const level = red.length ? 'urgent' : mod.length ? 'moderate' : 'low';
  const contextNotes = [];
  if (answers.age === '50plus') contextNotes.push('Age 50+ — discuss screening with primary care.');
  return {
    level,
    redFlags: red.map(r => ({ code: r.code, label: r.label })),
    moderateFlags: mod.map(r => ({ code: r.code, label: r.label })),
    contextNotes,
    triage: {
      urgent: 'See a urologist or primary care physician within 1–2 weeks.',
      moderate: 'Discuss with your primary care physician at your next visit.',
      low: 'Maintain healthy habits and attend routine checkups.'
    }[level]
  };
}
module.exports = { assess };
