import React, { useEffect, useState } from 'react';
import { stats } from '../api';
import { Card } from './ui';

export default function Dashboard({ t }) {
  const [s, setS] = useState(null);
  useEffect(() => {
    const load = () => stats().then(setS);
    load();
    const iv = setInterval(load, 5000);
    return () => clearInterval(iv);
  }, []);
  if (!s) return <div className="text-center py-20 text-stone-500">Loading…</div>;

  const levels = ['urgent', 'moderate', 'low'];
  const maxL = Math.max(1, ...levels.map(l => s.byLevel[l] || 0));
  const codes = Object.entries(s.byCode).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxC = Math.max(1, ...codes.map(([, n]) => n));

  return (
    <div className="animate-fade-up">
      <h1 className="text-3xl font-bold text-stone-900 mb-1">{t.dashboard.title}</h1>
      <p className="text-stone-500 text-sm mb-8">{t.dashboard.sub}</p>

      {s.total === 0 ? (
        <Card className="p-12 text-center text-stone-500">{t.dashboard.empty}</Card>
      ) : (
        <>
          <Card className="p-6 mb-6">
            <div className="text-xs uppercase tracking-wide text-stone-500 mb-1">{t.dashboard.total}</div>
            <div className="text-4xl font-extrabold text-teal-600">{s.total}</div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="p-6">
              <h2 className="font-semibold text-stone-900 mb-4">{t.dashboard.levels}</h2>
              <div className="space-y-4">
                {levels.map(l => {
                  const v = s.byLevel[l] || 0;
                  const pct = (v / maxL) * 100;
                  const c = l === 'urgent' ? 'from-rose-500 to-red-500' : l === 'moderate' ? 'from-amber-500 to-orange-500' : 'from-teal-500 to-emerald-500';
                  return (
                    <div key={l}>
                      <div className="flex justify-between text-xs text-stone-600 mb-1.5">
                        <span className="capitalize font-medium">{l}</span><span className="font-mono">{v}</span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                        <div className={`bg-gradient-to-r ${c} h-2 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="font-semibold text-stone-900 mb-4">{t.dashboard.codes}</h2>
              {codes.length === 0 ? <div className="text-sm text-stone-500">—</div> : (
                <div className="space-y-4">
                  {codes.map(([code, n]) => (
                    <div key={code}>
                      <div className="flex justify-between text-xs text-stone-600 mb-1.5">
                        <span className="font-mono">{code}</span><span className="font-mono">{n}</span>
                      </div>
                      <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-stone-700 to-stone-900 h-2 rounded-full transition-all duration-500" style={{ width: `${(n / maxC) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
