import React, { useState } from 'react';
import { QUESTIONS } from '../i18n';
import { assess } from '../api';
import { Card } from './ui';

export default function Assessment({ t, lang, nav }) {
  const qs = QUESTIONS[lang];
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState({});
  const [busy, setBusy] = useState(false);
  const q = qs[i];
  const pct = ((i + 1) / qs.length) * 100;

  async function pick(v) {
    const next = { ...answers, [q.id]: v };
    setAnswers(next);
    if (i < qs.length - 1) return setI(i + 1);
    setBusy(true);
    try {
      const r = await assess(next);
      sessionStorage.setItem('result', JSON.stringify(r));
      nav('/result');
    } catch { alert('Network error'); }
    finally { setBusy(false); }
  }

  if (busy) return (
    <div className="max-w-xl mx-auto py-24 text-center animate-fade-in">
      <div className="w-12 h-12 border-4 border-teal-200 border-t-teal-600 rounded-full mx-auto animate-spin mb-6" />
      <p className="text-stone-500">Analyzing your answers…</p>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto animate-fade-up">
      <div className="flex items-center justify-between mb-3 text-sm text-stone-500">
        <span>{t.quiz.q} {i + 1} {t.quiz.of} {qs.length}</span>
        <button onClick={() => nav('/')} className="text-xs text-stone-400 hover:text-rose-500">{t.quiz.exit}</button>
      </div>
      <div className="w-full bg-stone-200/70 rounded-full h-1.5 mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }} />
      </div>

      <Card className="p-7">
        <div className="text-xs uppercase tracking-wide text-teal-600 font-semibold mb-2">{t.quiz.q} {i + 1}</div>
        <h2 className="text-xl font-semibold text-stone-900 mb-6 leading-snug">{q.q}</h2>
        <div className="space-y-2.5">
          {q.opts.map(([label, v]) => (
            <button key={v} onClick={() => pick(v)}
              className="w-full text-start px-4 py-3.5 rounded-2xl border border-stone-200 hover:border-teal-400 hover:bg-teal-50/50 transition text-sm font-medium text-stone-800">
              {label}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
