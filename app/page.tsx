export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-zinc-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900">
          Roberto Wasso
        </h1>
        <p className="mt-4 text-2xl text-zinc-600">
          Software Engineer | Full Stack Developer 
        </p>
        <p className="mt-4 text-2xl text-zinc-600">
          Trader
        </p>
        <p className="mt-6 text-lg text-zinc-500">
          Spécialisé dans Firebase et les technologies Cloud. 
          Je construis des applications performantes et scalables.
        </p>
        <div className="mt-10">
          <a 
            href="/projects" 
            className="rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800 transition"
          >
            Voir mes projets
          </a>
        </div>
      </div>
    </main>
  );
}