'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import DomainCanvas from '@/components/DomainCanvas';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const aboutContent = {
  FR: {
    title: "À propos de moi",
    home: "Accueil",
    projects: "Projets →",
    bio1: "Je suis Roberto Wasso, Software Engineer passionné par le développement d'applications performantes.",
    bio2: "Mon parcours est orienté vers les solutions Cloud et la gestion de données complexes, avec une spécialisation sur Firebase, Node.js et Next.js.",
    bio3: "J'aime transformer des problèmes complexes en interfaces fluides et intuitives.",
    multilingual: "Multilingue (5 langues) :",
    multilingualValue: "Portugais, Anglais, Lingala, Français et Swahili.",
    methodTitle: "Ma méthode",
    methodSubtitle: "Au-delà de la technique, je conçois mon rôle comme celui d'un partenaire stratégique. Collaborer avec moi, c'est s'assurer d'un cadre de travail clair et professionnel :",
    m1Title: "Transparence radicale",
    m1Desc: "Je ne travaille pas en vase clos. Vous avez une visibilité constante sur l'avancement, les points de blocage et les choix techniques.",
    m2Title: "Code durable & scalable",
    m2Desc: "Mon approche est orientée vers la pérennité. Je privilégie une architecture propre (Clean Code) pour faire évoluer votre projet sans dépendre constamment de moi.",
    m3Title: "Respect des engagements",
    m3Desc: "En tant que Tech Lead, je connais la valeur du temps. Les délais annoncés sont des jalons que je m'engage à tenir.",
    m4Title: "Vision produit",
    m4Desc: "Avec une Licence en Génie Logiciel, je suis force de proposition pour optimiser vos fonctionnalités et assurer que la solution technique serve vos objectifs business.",
    ctaTitle: "Travaillons ensemble",
    ctaDesc: "En tant que Tech Lead et entrepreneur, j'accompagne mes partenaires du prototypage au déploiement. Chaque collaboration fait l'objet d'un cadre clair et transparent.",
    location: "Kinshasa, RDC",
  },
  EN: {
    title: "About Me",
    home: "Home",
    projects: "Projects →",
    bio1: "I am Roberto Wasso, a Software Engineer passionate about developing high-performance applications.",
    bio2: "My background focuses on Cloud solutions and complex data management, specializing in Firebase, Node.js, and Next.js.",
    bio3: "I love turning complex problems into fluid, intuitive interfaces.",
    multilingual: "Multilingual (5 languages):",
    multilingualValue: "Portuguese, English, Lingala, French, and Swahili.",
    methodTitle: "My Approach",
    methodSubtitle: "Beyond technology, I view my role as a strategic partner. Collaborating with me ensures a clear and professional working framework:",
    m1Title: "Radical Transparency",
    m1Desc: "I do not work in a silo. You have constant visibility into progress, roadblocks, and technical choices.",
    m2Title: "Sustainable & Scalable Code",
    m2Desc: "My approach aims for longevity. I prioritize clean architecture (Clean Code) so your project can evolve without constantly depending on me.",
    m3Title: "Commitment Respect",
    m3Desc: "As a Tech Lead, I know the value of time. The deadlines announced are milestones I am committed to meeting.",
    m4Title: "Product Vision",
    m4Desc: "With a Bachelor's degree in Software Engineering, I bring proactive ideas to optimize your features and ensure the technical solution serves your business goals.",
    ctaTitle: "Let's Work Together",
    ctaDesc: "As a Tech Lead and entrepreneur, I support my partners from prototyping to deployment. Every collaboration is built on a clear and transparent framework.",
    location: "Kinshasa, DRC",
  },
  PT: {
    title: "Sobre Mim",
    home: "Início",
    projects: "Projetos →",
    bio1: "Sou Roberto Wasso, Engenheiro de Software apaixonado pelo desenvolvimento de aplicações de alta performance.",
    bio2: "Minha trajetória é voltada para soluções em Nuvem e gestão de dados complexos, com especialização em Firebase, Node.js e Next.js.",
    bio3: "Gosto de transformar problemas complexos em interfaces fluidas e intuitivas.",
    multilingual: "Multilíngue (5 idiomas):",
    multilingualValue: "Português, Inglês, Lingala, Francês e Suaíli.",
    methodTitle: "Minha Metodologia",
    methodSubtitle: "Além da técnica, vejo meu papel como o de um parceiro estratégico. Colaborar comigo garante um ambiente de trabalho claro e profissional:",
    m1Title: "Transparência Radical",
    m1Desc: "Não trabalho isolado. Você tem visibilidade constante sobre o progresso, gargalos e escolhas técnicas.",
    m2Title: "Código Sustentável e Escalável",
    m2Desc: "Minha abordagem visa a durabilidade. Priorizo uma arquitetura limpa (Clean Code) para que seu projeto evolua sem depender constantemente de mim.",
    m3Title: "Respeito aos Compromissos",
    m3Desc: "Como Tech Lead, sei o valor do tempo. Os prazos anunciados são marcos que me comprometo a cumprir.",
    m4Title: "Visão de Produto",
    m4Desc: "Com Licenciatura em Engenharia de Software, proponho soluções para otimizar suas funcionalidades e garantir que a tecnologia sirva aos seus objetivos de negócio.",
    ctaTitle: "Vamos Trabalhar Juntos",
    ctaDesc: "Como Tech Lead e empreendedor, acompanho meus parceiros desde a prototipagem até o deploy. Cada colaboração possui uma estrutura clara e transparente.",
    location: "Kinshasa, RDC",
  },
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = aboutContent[lang];

  return (
    <main className="relative min-h-screen bg-black text-zinc-100 overflow-hidden py-12 px-6 md:px-10">
      {/* Moteur 3D du Territoire en arrière-plan */}
      <DomainCanvas />

      {/* Interface superposée en Glassmorphism */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        
        {/* SECTION 1 : INTRO & BIO */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {t.title}
            </h1>

            {/* Navigation d'extension du territoire */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
              >
                <span>{t.home}</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950/60 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
              >
                <span>{t.projects}</span>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 w-64 mx-auto md:mx-0 group">
              {/* Effet d'aura lumineuse derrière la photo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 group-hover:opacity-80 transition duration-1000 blur-md"></div>
              <Image 
                src="/roberto-profile.jpg"
                alt="Roberto Wasso"
                fill 
                sizes="(max-width: 768px) 100vw, 256px"
                loading="eager"
                className="relative rounded-full object-cover border-2 border-zinc-700/50 shadow-2xl"
              />
            </div>

            <div className="space-y-4 text-zinc-300">
              <p className="text-lg font-semibold text-white">
                {t.bio1}
              </p>
              <p>
                {t.bio2}
              </p>
              <p>
                {t.bio3}
              </p>
              <p className="text-sm bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 text-zinc-400">
               <span className="text-zinc-200 font-medium">{t.multilingual}</span> {t.multilingualValue}
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 : ENGAGEMENT PROFESSIONNEL */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
          className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-white mb-4">{t.methodTitle}</h2>
          <p className="text-zinc-400 mb-8">
            {t.methodSubtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{t.m1Title}</h3>
              <p className="text-sm text-zinc-400">
                {t.m1Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{t.m2Title}</h3>
              <p className="text-sm text-zinc-400">
                {t.m2Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{t.m3Title}</h3>
              <p className="text-sm text-zinc-400">
                {t.m3Desc}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-indigo-500/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{t.m4Title}</h3>
              <p className="text-sm text-zinc-400">
                {t.m4Desc}
              </p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 3 : CTA / CONTACT */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-2xl"
        >
          <h3 className="text-xl font-bold text-white">{t.ctaTitle}</h3>
          <p className="text-zinc-400 mt-2 max-w-2xl">
            {t.ctaDesc}
          </p>
          
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-zinc-300">
            <a 
              href="mailto:robertojosue400@gmail.com" 
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-white/30 transition-all group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">📧</span>
              <span className="text-sm font-medium truncate">robertojosue400@gmail.com</span>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <span className="text-xl">📍</span>
              <span className="text-sm font-medium">{t.location}</span>
            </div>

            <a 
              href="https://linkedin.com/in/roberto-wasso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-white/30 transition-all group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">🔗</span>
              <span className="text-sm font-medium">LinkedIn / Roberto Wasso</span>
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}