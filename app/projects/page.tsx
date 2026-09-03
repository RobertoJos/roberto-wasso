'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import DomainCanvas from '@/components/DomainCanvas';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

const projectsContent = {
  FR: {
    title: "Mes Projets",
    subtitle: "Applications web, plateformes cloud et outils sur mesure déployés sur le marché.",
    aboutLink: "Étendre vers À propos",
    statusProduction: "En production",
    statusDev: "En développement",
    p1Desc: "Simulateur instantané de prime mensuelle avec calcul dynamique selon la catégorie, l'usage et la valeur du véhicule, couplé à un tunnel de conversion WhatsApp.",
    p2Desc: "Plateforme de contenu pour le développement personnel et la psychologie du trading.",
    p3Desc: "Système de gestion multi-établissements.",
  },
  EN: {
    title: "My Projects",
    subtitle: "Web applications, cloud platforms, and custom tools deployed in the market.",
    aboutLink: "Extend to About",
    statusProduction: "In Production",
    statusDev: "In Development",
    p1Desc: "Instant monthly premium simulator with dynamic calculation based on vehicle category, usage, and value, coupled with a WhatsApp conversion funnel.",
    p2Desc: "Content platform for personal development and trading psychology.",
    p3Desc: "Multi-institution management system.",
  },
  PT: {
    title: "Meus Projetos",
    subtitle: "Aplicações web, plataformas em nuvem e ferramentas sob medida implantadas no mercado.",
    aboutLink: "Estender para Sobre",
    statusProduction: "Em Produção",
    statusDev: "Em Desenvolvimento",
    p1Desc: "Simulador instantâneo de prêmio mensal com cálculo dinâmico baseado na categoria, uso e valor do veículo, acoplado a um funil de conversão do WhatsApp.",
    p2Desc: "Plataforma de conteúdo para desenvolvimento pessoal e psicologia de trading.",
    p3Desc: "Sistema de gestão multi-instituições.",
  },
};

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = projectsContent[lang];

  return (
    <main className="relative min-h-screen bg-black text-zinc-100 overflow-hidden py-12 px-6 md:px-10">
      <DomainCanvas />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t.title}
            </h1>
            <p className="mt-2 text-zinc-400 text-lg">
              {t.subtitle}
            </p>
          </div>

          {/* Lien d'extension vers la page À propos */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 self-start md:self-auto px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-700/80 hover:border-white text-sm font-medium text-white transition-all backdrop-blur-md shadow-lg hover:scale-105 active:scale-95"
          >
            <span>{t.aboutLink}</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Grille de projets */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <ProjectCard 
              title="RAWSUR | Assurance Auto" 
              description={t.p1Desc}
              status={t.statusProduction}
              link="https://rawsur-simulator.vercel.app"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard 
              title="ZAYI | Mindset" 
              description={t.p2Desc}
              status={t.statusProduction}
              link="https://zayimindset.com"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard 
              title="ZAYI | Gestion Scolaire" 
              description={t.p3Desc}
              status={t.statusDev}
              link="https://studio--studio-8821630911-8d453.us-central1.hosted.app"
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}