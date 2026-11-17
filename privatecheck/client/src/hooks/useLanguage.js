import { useState, useEffect } from 'react';
import { STRINGS, QUESTIONS } from '../i18n';

export function useLanguage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = STRINGS[lang].dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return { lang, toggle, s: STRINGS[lang], questions: QUESTIONS[lang] };
}
