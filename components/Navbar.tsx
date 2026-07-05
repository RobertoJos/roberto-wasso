import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b border-zinc-200">
      <div className="font-bold text-xl">Roberto Wasso</div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-blue-600">Accueil</Link>
        <Link href="/projects" className="hover:text-blue-600">Projets</Link>
        <Link href="/about" className="hover:text-blue-600">À propos</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}