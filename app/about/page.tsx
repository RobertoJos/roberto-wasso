import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="p-10 max-w-4xl mx-auto space-y-16">
      
      {/* SECTION 1 : INTRO & BIO */}
      <section>
        <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative h-64 w-64 mx-auto md:mx-0">
            <Image 
              src="/Zayi.png"
              alt="Roberto Wasso"
              fill 
              sizes="(max-width: 768px) 100vw, 256px"
              loading="eager"
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="space-y-4">
            <p className="text-lg text-zinc-700 font-medium">
              Je suis Roberto Wasso, Software Engineer passionné par le développement d'applications performantes.
            </p>
            <p className="text-zinc-600">
              Mon parcours est orienté vers les solutions Cloud et la gestion de données complexes, avec une spécialisation sur Firebase, Node.js et Next.js.
            </p>
            <p className="text-zinc-600">
              J'aime transformer des problèmes complexes en interfaces fluides et intuitives.
            </p>
            <p className="text-zinc-600">
              Non seulement je parle et je comprends les langages des ordinateurs, mais je compte aussi 5 langages humains à mon actif : le portugais, l'anglais, le lingala, le français et le swahili.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 : ENGAGEMENT PROFESSIONNEL */}
      <section className="border-t border-zinc-200 pt-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Ma méthode</h2>
        <p className="text-zinc-600 mb-6">
          Au-delà de la technique, je conçois mon rôle comme celui d'un partenaire stratégique. Collaborer avec moi, c'est s'assurer d'un cadre de travail clair et professionnel :
        </p>
        
        <ul className="space-y-4 text-zinc-600">
          <li>
            <strong className="text-zinc-900">Transparence radicale :</strong> Je ne travaille pas en vase clos. Vous avez une visibilité constante sur l'avancement, les points de blocage et les choix techniques.
          </li>
          <li>
            <strong className="text-zinc-900">Code durable et scalable :</strong> Mon approche est orientée vers la pérennité. Je privilégie une architecture propre (Clean Code) pour que votre projet puisse évoluer sans dépendre constamment de moi.
          </li>
          <li>
            <strong className="text-zinc-900">Respect des engagements :</strong> En tant que Tech Lead, je connais la valeur du temps. Les délais annoncés sont des jalons que je m'engage à tenir.
          </li>
          <li>
            <strong className="text-zinc-900">Vision produit :</strong> Avec une Licence en Genie Logiciel, je suis force de proposition pour optimiser vos fonctionnalités et assurer que la solution technique serve vos objectifs business.
          </li>
        </ul>
      </section>

      {/* SECTION 3 : CTA / CONTACT */}
      <section className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold text-zinc-900">Travaillons ensemble</h3>
        <p className="text-zinc-600 mt-2">
          En tant que Tech Lead et entrepreneur, j'accompagne mes partenaires du prototypage au déploiement. 
          Chaque collaboration fait l'objet d'un cadre clair et transparent.
        </p>
        
        <ul className="mt-6 space-y-4 text-zinc-600">
          <li className="flex items-center gap-3">
            <span>📧</span>
            <a href="mailto:robertojosue400@gmail.com" className="hover:text-blue-600 transition-colors font-medium">
              robertojosue400@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span>📍</span>
            <span>Kinshasa, RDC</span>
          </li>
          <li className="flex items-center gap-3">
            <span>🔗</span>
            <a href="https://linkedin.com/in/roberto-wasso" target="_blank" className="hover:text-blue-600 transition-colors font-medium">
              LinkedIn / Roberto Wasso
            </a>
          </li>
        </ul>
      </section>
      
    </main>
  );
}