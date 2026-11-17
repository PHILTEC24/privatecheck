import React, { useEffect, useState } from 'react';
import { Card, Badge, Gauge, PrimaryButton, GhostButton } from './ui';

const META = {
  low:      { tone: 'teal',  bg: 'from-teal-50 to-emerald-50 ring-teal-200' },
  moderate: { tone: 'amber', bg: 'from-amber-50 to-orange-50 ring-amber-200' },
  urgent:   { tone: 'rose',  bg: 'from-rose-50 to-red-50 ring-rose-200' }
};

export default function Result({ t, nav }) {
  const [r, setR] = useState(null);
  const [summary, setSummary] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const raw = sessionStorage.getItem('result');
    if (!raw) return nav('/assess');
    setR(JSON.parse(raw));
  }, [nav]);

  if (!r) return null;
  const meta = META[r.level];

  const build = () => {
    const lines = [
      'PATIENT SELF-ASSESSMENT SUMMARY (anonymous)',
      'Tool: PrivateCheck — male reproductive health triage prototype',
      'Not a clinical diagnosis.',
      '',
      `TRIAGE LEVEL: ${r.level.toUpperCase()}`,
      `Recommended action: ${r.triage}`,
      '',
      'RED-FLAG SIGNALS:',
      ...(r.redFlags.length ? r.redFlags.map(x => ' - ' + x.label) : [' - None reported']),
      '',
      'MODIFIABLE RISK FACTORS:',
      ...(r.moderateFlags.length ? r.moderateFlags.map(x => ' - ' + x.label) : [' - None reported']),
      '',
      'CONTEXT NOTES:',
      ...(r.contextNotes.length ? r.contextNotes.map(x => ' - ' + x) : [' - None reported']),
      '',
      'Generated on-device. No identifiable data transmitted.'
    ];
    setSummary(lines.join('\n'));
    setShow(true);
  };

  const copy = () => navigator.clipboard.writeText(summary);
  const download = () => {
    const b = new Blob([summary], { type: 'text/plain' });
    const u = URL.createObjectURL(b);
    const a = document.createElement('a'); a.href = u; a.download = 'privatecheck-summary.txt'; a.click();
    URL.revokeObjectURL(u);
  };

  const List = ({ items, tone }) => items.length
    ? <ul className={`list-disc list-inside space-y-2 text-sm ${tone}`}>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>
    : <p className="text-sm text-stone-500">{t.result.none}</p>;

  return (
    <div className="max-w-2xl mx-auto animate-fade-up">
      <h1 className="text-3xl font-bold text-stone-900 mb-1">{t.result.title}</h1>
      <p className="text-stone-500 text-sm mb-8">{t.result.sub}</p>

      <div className={`rounded-3xl p-6 mb-6 bg-gradient-to-br ring-1 flex items-center gap-6 ${meta.bg}`}>
        <Gauge level={r.level} label={t.result.levels[r.level]} />
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wide font-semibold text-stone-600 mb-1">{t.result.level}</div>
          <Badge tone={meta.tone}>{t.result.levels[r.level]}</Badge>
          <p className="text-sm text-stone-700 mt-3 leading-relaxed">{r.triage}</p>
        </div>
      </div>

      <Card className="p-6 mb-4">
        <h2 className="font-semibold text-stone-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500" />{t.result.red}</h2>
        <List items={r.redFlags.map(f => f.label)} tone="text-rose-700" />
      </Card>
      <Card className="p-6 mb-4">
        <h2 className="font-semibold text-stone-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500" />{t.result.mod}</h2>
        <List items={r.moderateFlags.map(f => f.label)} tone="text-amber-700" />
      </Card>
      <Card className="p-6 mb-4">
        <h2 className="font-semibold text-stone-900 mb-3 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-stone-400" />{t.result.ctx}</h2>
        <List items={r.contextNotes} tone="text-stone-700" />
      </Card>
      <Card className="p-6 mb-6">
        <h2 className="font-semibold text-stone-900 mb-3">{t.result.boundaryTitle}</h2>
        <p className="text-sm text-stone-600 leading-relaxed">{t.result.boundary}</p>
      </Card>

      <div className="flex flex-wrap gap-3 no-print">
        <PrimaryButton onClick={build}>{t.result.summaryBtn}</PrimaryButton>
        <GhostButton onClick={() => { sessionStorage.clear(); nav('/'); }}>{t.result.clear}</GhostButton>
      </div>

      {show && (
        <div className="mt-10 animate-fade-up">
          <h2 className="text-xl font-bold text-stone-900 mb-1">{t.summary.title}</h2>
          <p className="text-stone-500 text-sm mb-4">{t.summary.sub}</p>
          <Card className="p-6 mb-4">
            <pre className="whitespace-pre-wrap text-sm text-stone-700 font-mono">{summary}</pre>
          </Card>
          <div className="flex flex-wrap gap-2 no-print">
            <PrimaryButton onClick={copy} className="px-5 py-2.5 text-sm">{t.summary.copy}</PrimaryButton>
            <GhostButton onClick={download} className="px-5 py-2.5 text-sm">{t.summary.download}</GhostButton>
            <GhostButton onClick={() => window.print()} className="px-5 py-2.5 text-sm">{t.summary.print}</GhostButton>
            <button onClick={() => { sessionStorage.clear(); nav('/'); }} className="text-stone-500 hover:text-rose-500 px-3 py-2.5 text-sm font-medium">{t.summary.clear}</button>
          </div>
        </div>
      )}
    </div>
  );
}
