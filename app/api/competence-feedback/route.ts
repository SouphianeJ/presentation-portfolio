import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  // Ici tu peux persister (DB, sheets, webhook…). Pour l'exemple: console only.
  console.log("[competence-feedback]", payload);
  return NextResponse.json({ ok: true });
}

