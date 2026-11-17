import React from 'react';

export const Badge = ({ children, tone = 'stone' }) => {
  const tones = {
    stone: 'bg-stone-100 text-stone-700',
    teal: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
    amber: 'bg-amber-50 text-amber-800 ring-1 ring-amber-200',
    rose: 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'
  };
  return <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>;
};

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white/95 rounded-3xl border border-stone-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_28px_-14px_rgba(6,95,70,0.18)] backdrop-blur-sm ${className}`}>{children}</div>
);

export const PrimaryButton = ({ children, ...p }) => (
  <button {...p}
    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-700 hover:from-emerald-700 hover:via-teal-700 hover:to-teal-800 text-white font-semibold px-7 py-3 rounded-full shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 ring-1 ring-emerald-800/10 transition-all active:scale-[0.98] ${p.className || ''}`}>
    {children}
  </button>
);

export const GhostButton = ({ children, ...p }) => (
  <button {...p}
    className={`inline-flex items-center justify-center gap-2 bg-white border border-stone-300 hover:bg-stone-50 hover:border-stone-400 text-stone-700 font-semibold px-6 py-3 rounded-full transition ${p.className || ''}`}>
    {children}
  </button>
);

export const Gauge = ({ level, label }) => {
  const meta = {
    low: { c: '#059669', p: 22, glow: 'rgba(5,150,105,0.25)' },
    moderate: { c: '#d97706', p: 62, glow: 'rgba(217,119,6,0.25)' },
    urgent: { c: '#e11d48', p: 92, glow: 'rgba(225,29,72,0.25)' }
  }[level];
  const dash = (meta.p / 100) * 534;
  return (
    <svg viewBox="0 0 200 200" className="w-36 h-36 shrink-0">
      <defs>
        <linearGradient id="gaugeBg" x1="0" x2="1">
          <stop offset="0" stopColor="#f5f5f4" /><stop offset="1" stopColor="#e7e5e4" />
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill="none" stroke="url(#gaugeBg)" strokeWidth="14" />
      <circle cx="100" cy="100" r="85" fill="none" stroke={meta.c} strokeWidth="14" strokeOpacity="0.35" filter="url(#glow)"
        strokeDasharray={`${dash} 534`} strokeLinecap="round" transform="rotate(-90 100 100)" />
      <circle cx="100" cy="100" r="85" fill="none" stroke={meta.c} strokeWidth="14"
        strokeDasharray={`${dash} 534`} strokeLinecap="round" transform="rotate(-90 100 100)"
        style={{ transition: 'stroke-dasharray 0.9s cubic-bezier(0.22,1,0.36,1)' }} />
      <text x="100" y="104" textAnchor="middle" fontSize="24" fontWeight="800" fill="#0c0a09">{label}</text>
    </svg>
  );
};
