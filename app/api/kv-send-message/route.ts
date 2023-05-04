import crypto from 'crypto';
import kv from '@vercel/kv';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const uuid = crypto.randomUUID();
  const timestamp = Date.now();

  try {
    await kv.set(`contact-${uuid}`, {
      name, email, message, timestamp,
    });

    return new Response('Email sent and contact saved', { status: 200 });
  } catch (err) {
    return new Response('Internal error', { status: 500 });
  }
}
