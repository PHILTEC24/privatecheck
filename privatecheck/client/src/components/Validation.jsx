import React, { useEffect, useState } from 'react';
import { validation } from '../api';
import { Card, Badge } from './ui';

export default function Validation({ t }) {
  const [d, setD] = useState(null);
  useEffect(() => { validation().then(setD); }, []);
  if (!d) return <div className="text-center py-20 text-stone-500">Loading…</div>;
  const pct = n => `${Math.round(n * 100)}%`;

  return (
    <div className="animate-fade-up">
      <h1 className="text-3xl font-bold text-stone-900 mb-1">{t.validation.title}</h1>
      <p className="text-stone-500 text-sm mb-8">{d.method}</p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { v: pct(d.summary.agreement), l: t.validation.agreement },
          { v: d.summary.urgentSensitivity != null ? pct(d.summary.urgentSensitivity) : '—', l: `${t.validation.urgent} (${d.summary.urgentCases})` },
          { v: d.summary.total, l: t.validation.total }
        ].map((s, i) => (
          <Card key={i} className="p-6">
            <div className="text-3xl font-extrabold text-teal-600">{s.v}</div>
            <div className="text-sm text-stone-600 mt-1">{s.l}</div>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50 text-stone-600">
            <tr>
              <th className="text-start px-4 py-3 font-medium">ID</th>
              <th className="text-start px-4 py-3 font-medium">{t.validation.profiles}</th>
              <th className="text-start px-4 py-3 font-medium">{t.validation.expected}</th>
              <th className="text-start px-4 py-3 font-medium">{t.validation.predicted}</th>
              <th className="text-start px-4 py-3 font-medium">—</th>
            </tr>
          </thead>
          <tbody>
            {d.profiles.map(p => (
              <tr key={p.id} className="border-t border-stone-100">
                <td className="px-4 py-2.5 font-mono text-xs text-stone-500">{p.id}</td>
                <td className="px-4 py-2.5 text-stone-700">{p.note}</td>
                <td className="px-4 py-2.5 text-stone-700">{p.expected}</td>
                <td className="px-4 py-2.5 text-stone-700">{p.predicted}</td>
                <td className="px-4 py-2.5">
                  <Badge tone={p.correct ? 'teal' : 'rose'}>{p.correct ? t.validation.ok : t.validation.fail}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
