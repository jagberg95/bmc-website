import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // Mock route - for now just return ok. Later: send email, store in DB, etc.
  return NextResponse.json({ ok: true, received: body });
}
