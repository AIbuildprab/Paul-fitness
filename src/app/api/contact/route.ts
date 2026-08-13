import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Body = {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const lines = [`Hi Paul, I'm ${name}.`, `Email: ${email}`];
  if (interest) {
    lines.push(`Interested in: ${interest}`);
  }
  lines.push("", message);

  const text = lines.join("\n");

  const whatsapp = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

  return NextResponse.json({ ok: true, whatsapp });
}
