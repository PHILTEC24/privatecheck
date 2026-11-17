import React, { useEffect, useState } from 'react';
import { STRINGS } from './i18n';
import Landing from './components/Landing';
import Assessment from './components/Assessment';
import Result from './components/Result';
import Validation from './components/Validation';
import Dashboard from './components/Dashboard';

function useRoute() {
  const [r, setR] = useState(() => window.location.hash.replace(/^#/, '') || '/');
  useEffect(() => {
    const on = () => setR(window.location.hash.replace(/^#/, '') || '/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return r;
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const route = useRoute();
  const t = STRINGS[lang];
  const nav = p => (window.location.hash = p);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    localStorage.setItem('lang', lang);
  }, [lang, t.dir]);

  return (
    <div className="min-h-screen flex flex-col text-stone-800">
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-600 to-teal-700 text-white grid place-items-center font-extrabold shadow-md shadow-emerald-700/25 group-hover:shadow-lg group-hover:shadow-emerald-700/40 transition">P</div>
            <div className="leading-tight">
              <div className="font-semibold text-stone-900">{t.brand}</div>
              <div className="text-[11px] text-stone-500">{t.tag}</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {[['/assess', t.nav.assess], ['/validation', t.nav.validation], ['/dashboard', t.nav.dashboard]].map(([p, l]) => (
              <a key={p} href={'#' + p}
                className={`px-3 py-2 rounded-lg transition ${route === p ? 'bg-stone-100 font-medium text-stone-900' : 'text-stone-600 hover:bg-stone-50'}`}>
                {l}
              </a>
            ))}
          </nav>
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-sm px-3 py-1.5 rounded-lg border border-stone-300 hover:bg-stone-50 font-medium text-stone-700">
            {t.switch}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
        {route === '/' && <Landing t={t} nav={nav} />}
        {route === '/assess' && <Assessment t={t} lang={lang} nav={nav} />}
        {route === '/result' && <Result t={t} nav={nav} />}
        {route === '/validation' && <Validation t={t} />}
        {route === '/dashboard' && <Dashboard t={t} />}
      </main>

      <footer className="border-t border-stone-200/70 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 py-5 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>{t.footer.left}</span>
          <span>{t.footer.right}</span>
        </div>
      </footer>
    </div>
  );
}
