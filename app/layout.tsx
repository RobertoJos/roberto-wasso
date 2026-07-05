import Navbar from '@/components/Navbar'; // Importation
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar /> {/* Appel du composant */}
        {children}
        <footer />
      </body>
    </html>
  );
}