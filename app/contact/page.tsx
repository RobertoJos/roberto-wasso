"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset du formulaire
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      
      <p className="text-zinc-600 mb-8">
        Un projet en tête ou une question ? Envoie-moi un message, je te répondrai avec plaisir.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Nom</label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="Ton nom"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 w-full p-3 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black outline-none"
            placeholder="ton.email@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
          <textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 w-full p-3 border border-zinc-300 rounded-lg h-32 focus:ring-2 focus:ring-black outline-none"
            placeholder="Ton message..."
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-800 transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>

        {status === 'success' && <p className="text-green-600 text-center">Message envoyé avec succès !</p>}
        {status === 'error' && <p className="text-red-600 text-center">Une erreur est survenue, réessaie plus tard.</p>}
      </form>
    </main>
  );
}