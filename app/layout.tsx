import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-black text-white antialiased">
        <LanguageProvider>
          {/* Le sélecteur 3D de langue fixe en haut à droite sur toutes les pages */}
          <LanguageSwitcher />

          <Navbar />
          
          {/* flex-grow pousse le footer vers le bas si la page est vide */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}