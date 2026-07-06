import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // 1. Ne pas oublier l'import !
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      {/* 2. On ajoute flex flex-col min-h-screen pour gérer la hauteur */}
      <body className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* 3. flex-grow pousse le footer vers le bas si la page est vide */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> {/* 4. Utilise la majuscule pour ton composant */}
      </body>
    </html>
  );
}