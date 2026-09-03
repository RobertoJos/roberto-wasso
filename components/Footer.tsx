export default function Footer() {
  return (
    <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-200">
      <p>
        © {new Date().getFullYear()} Roberto Wasso. Tous droits réservés.
      </p>
    </footer>
  );
}