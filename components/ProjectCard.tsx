interface ProjectProps {
  title: string;
  description: string;
  status: "En production" | "En développement" | "Archivé";
  link?: string; // Le '?' signifie que le lien est optionnel
}

export default function ProjectCard({ title, description, status, link }: ProjectProps) {
  return (
    <div className="p-6 border border-zinc-200 rounded-xl hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-zinc-600">{description}</p>
      
      {/* Badge de statut */}
      <span className={`inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold
        ${status === "En production" ? "bg-green-100 text-green-800" : ""}
        ${status === "En développement" ? "bg-blue-100 text-blue-800" : ""}
        ${status === "Archivé" ? "bg-zinc-100 text-zinc-800" : ""}
      `}>
        {status}
      </span>
      
      {link && (
        <a href={link} className="block mt-4 text-blue-600 hover:underline">Voir le projet</a>
      )}
    </div>
  );
}