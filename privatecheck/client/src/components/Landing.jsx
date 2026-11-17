import React from 'react';
import { Card, PrimaryButton, Badge } from './ui';

export default function Landing({ t, nav }) {
  return (
    <div className="animate-fade-up">
      <div className="rounded-2xl bg-amber-50 ring-1 ring-amber-200 text-amber-900 text-xs p-3 mb-10 flex items-start gap-2">
        <span className="font-bold">ⓘ</span><span>{t.landing.disclaimer}</span>
      </div>

      <section className="relative text-center max-w-3xl mx-auto mb-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-emerald-300/25 blur-3xl animate-float" />
          <div className="absolute top-24 left-1/4 w-64 h-64 rounded-full bg-teal-300/25 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="mb-5"><Badge tone="teal">{t.landing.eyebrow}</Badge></div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 leading-[1.1] tracking-tight">
          {t.landing.h1a}<br />
          <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent">{t.landing.h1b}</span>
        </h1>
        <p className="text-stone-600 mt-6 mb-9 text-lg leading-relaxed max-w-2xl mx-auto">{t.landing.sub}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton onClick={() => nav('/assess')}>{t.landing.cta} →</PrimaryButton>
          <a href="#how" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-4 py-3">{t.landing.secondary}</a>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-20">
        {t.landing.trust.map((f, i) => (
          <Card key={i} className="p-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 ring-1 ring-teal-100 text-teal-700 grid place-items-center mb-4 font-bold text-lg">
              {['◉', '⚕', '☰'][i]}
            </div>
            <div className="font-semibold text-stone-900 mb-1">{f.t}</div>
            <div className="text-sm text-stone-600 leading-relaxed">{f.d}</div>
          </Card>
        ))}
      </section>

      <section id="how" className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-stone-900 text-center mb-10">{t.landing.howTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {t.landing.steps.map((s, i) => (
            <Card key={i} className="p-6">
              <div className="text-xs font-mono text-teal-600 mb-2">{s.n}</div>
              <div className="font-semibold text-stone-900 mb-1">{s.t}</div>
              <div className="text-sm text-stone-600 leading-relaxed">{s.d}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 text-center mb-6">{t.landing.statsTitle}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {t.landing.stats.map((s, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">{s.v}</div>
              <div className="text-xs text-stone-500 mt-1">{s.l}</div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
