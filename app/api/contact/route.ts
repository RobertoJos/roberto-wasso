import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Extraction et validation des données
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    // 2. Configuration du transporteur (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Correction pour l'erreur "self-signed certificate in certificate chain" en local
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 3. Envoi de l'email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'robertojosue400@gmail.com', // Ton email
      subject: `Nouveau message de ${name}`,
      text: message, // Version texte brut
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Nouveau contact sur ton Portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="background: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l\'envoi de l\'email' }, 
      { status: 500 }
    );
  }
}