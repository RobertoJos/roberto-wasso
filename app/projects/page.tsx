import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>
      
      {/* C'est ici que tu appelles ta machine (ton composant) */}
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard 
         title="RAWSUR | Assurance Auto" 
         description="Simulateur instantané de prime mensuelle avec calcul dynamique selon la catégorie, l'usage et la valeur du véhicule, couplé à un tunnel de conversion WhatsApp."
         status="En production"
         link="https://rawsur-simulator.vercel.app"
        />

        <ProjectCard 
          title="ZAYI | Mindset" 
          description="Plateforme de contenu pour le développement personnel."
          status="En production"
          link="https://zayimindset.com"
        />
        
        <ProjectCard 
          title="ZAYI | Gestion Scolaire" 
          description="Système de gestion multi-établissements."
          status="En développement"
          link="https://studio--studio-8821630911-8d453.us-central1.hosted.app"
        />
      </div>
    </main>
  );
}