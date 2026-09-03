'use client';

import { useLanguage, Language } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-30">
      <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)]">
        {(['FR', 'EN', 'PT'] as Language[]).map((item) => {
          const isActive = lang === item;
          return (
            <button
              key={item}
              onClick={() => setLang(item)}
              className={`relative px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-white bg-gradient-to-b from-zinc-700 to-zinc-800 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] border border-zinc-600/50 scale-105'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}