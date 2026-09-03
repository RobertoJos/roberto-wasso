'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DomainCanvas from '@/components/DomainCanvas';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  FR: {
    subtitle: 'Software Engineer | Full Stack Developer',
    trader: 'Trader',
    bio: 'Spécialisé dans Firebase et les technologies Cloud. Je construis des applications performantes et scalables.',
    expandBtn: 'Extension du Territoire',
    projectsBtn: 'Voir mes projets',
    aboutBtn: 'À propos',
    restoreBtn: "Rétablir l'interface",
  },
  EN: {
    subtitle: 'Software Engineer | Full Stack Developer',
    trader: 'Trader',
    bio: 'Specialized in Firebase and Cloud technologies. Building high-performance, scalable applications.',
    expandBtn: 'Domain Expansion',
    projectsBtn: 'View Projects',
    aboutBtn: 'About Me',
    restoreBtn: 'Reset Interface',
  },
  PT: {
    subtitle: 'Engenheiro de Software | Desenvolvedor Full Stack',
    trader: 'Trader',
    bio: 'Especializado em Firebase e tecnologias de Nuvem. Desenvolvo aplicações de alta performance e escaláveis.',
    expandBtn: 'Expansão de Domínio',
    projectsBtn: 'Ver Projetos',
    aboutBtn: 'Sobre Mim',
    restoreBtn: 'Restaurar Interface',
  },
};

export default function Home() {
  const [isDomainExpanded, setIsDomainExpanded] = useState(false);
  
  // On récupère la langue globale depuis le Context
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black font-sans">
      {/* Arrière-plan 3D */}
      <DomainCanvas />

      {/* Note : Le sélecteur 3D est déjà géré globalement dans app/layout.tsx via <LanguageSwitcher /> */}

      {/* Façade blanche (se dissipe à l'activation) */}
      <AnimatePresence>
        {!isDomainExpanded && (
          <motion.div
            initial={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center p-10 bg-zinc-50 text-center"
          >
            <div className="max-w-2xl">
              <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">
                Roberto Wasso
              </h1>
              <p className="mt-4 text-2xl text-zinc-600">
                {t.subtitle}
              </p>
              <p className="mt-2 text-2xl text-zinc-600 font-medium">
                {t.trader}
              </p>
              <p className="mt-6 text-lg text-zinc-500">
                {t.bio}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setIsDomainExpanded(true)}
                  className="rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800 transition cursor-pointer font-medium shadow-lg hover:scale-105 active:scale-95"
                >
                  {t.expandBtn}
                </button>
                
                <Link 
                  href="/projects" 
                  className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-800 hover:bg-zinc-100 transition font-medium"
                >
                  {t.projectsBtn}
                </Link>

                <Link 
                  href="/about" 
                  className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-800 hover:bg-zinc-100 transition font-medium"
                >
                  {t.aboutBtn}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contrôles visibles une fois dans le Domaine 3D */}
      {isDomainExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-6 left-6 z-20 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => setIsDomainExpanded(false)}
            className="rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-5 py-2 text-sm text-white hover:bg-white/10 transition cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          >
            {t.restoreBtn}
          </button>

          <Link
            href="/projects"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition shadow-lg"
          >
            {t.projectsBtn}
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition shadow-lg"
          >
            {t.aboutBtn}
          </Link>
        </motion.div>
      )}
    </main>
  );
}