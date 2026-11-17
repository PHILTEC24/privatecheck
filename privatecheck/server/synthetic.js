const base = { mumps: 'no', testicular_pain: 'no', varicocele: 'no', metabolic: 'no', lifestyle: 'no', trying: 'no', age: '18_34' };
module.exports.PROFILES = [
  { id: 'S01', note: 'Healthy adult', a: { ...base }, e: 'low' },
  { id: 'S02', note: 'Age 50+ only', a: { ...base, age: '50plus' }, e: 'low' },
  { id: 'S03', note: 'Mumps history', a: { ...base, mumps: 'yes' }, e: 'urgent' },
  { id: 'S04', note: 'Testicular symptoms', a: { ...base, testicular_pain: 'yes' }, e: 'urgent' },
  { id: 'S05', note: 'Mumps + testicular', a: { ...base, mumps: 'yes', testicular_pain: 'yes' }, e: 'urgent' },
  { id: 'S06', note: 'Varicocele', a: { ...base, varicocele: 'yes' }, e: 'moderate' },
  { id: 'S07', note: 'Metabolic', a: { ...base, metabolic: 'yes' }, e: 'moderate' },
  { id: 'S08', note: 'Lifestyle exposure', a: { ...base, lifestyle: 'yes' }, e: 'moderate' },
  { id: 'S09', note: 'Infertility 12mo', a: { ...base, trying: 'yes' }, e: 'moderate' },
  { id: 'S10', note: 'All moderate', a: { ...base, varicocele: 'yes', metabolic: 'yes', lifestyle: 'yes', trying: 'yes' }, e: 'moderate' },
  { id: 'S11', note: 'Mumps + varicocele', a: { ...base, mumps: 'yes', varicocele: 'yes' }, e: 'urgent' },
  { id: 'S12', note: 'Testicular + infertility', a: { ...base, testicular_pain: 'yes', trying: 'yes' }, e: 'urgent' },
  { id: 'S13', note: 'Unknown mumps', a: { ...base, mumps: 'unknown' }, e: 'low' },
  { id: 'S14', note: 'Unknown varicocele', a: { ...base, varicocele: 'unknown' }, e: 'low' },
  { id: 'S15', note: 'Older + metabolic', a: { ...base, age: '50plus', metabolic: 'yes' }, e: 'moderate' },
  { id: 'S16', note: 'Older + mumps', a: { ...base, age: '50plus', mumps: 'yes' }, e: 'urgent' },
  { id: 'S17', note: 'Lifestyle + infertility', a: { ...base, lifestyle: 'yes', trying: 'yes' }, e: 'moderate' },
  { id: 'S18', note: 'All signals', a: { mumps: 'yes', testicular_pain: 'yes', varicocele: 'yes', metabolic: 'yes', lifestyle: 'yes', trying: 'yes', age: '35_49' }, e: 'urgent' },
  { id: 'S19', note: 'Varicocele + infertility', a: { ...base, varicocele: 'yes', trying: 'yes' }, e: 'moderate' },
  { id: 'S20', note: 'Mumps + metabolic + infert.', a: { ...base, mumps: 'yes', metabolic: 'yes', trying: 'yes' }, e: 'urgent' }
];
