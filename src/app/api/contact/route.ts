import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  goal?: string;
  setup?: string;
  availability?: string;
  delivery?: string;
  interest?: string;
  message?: string;
};

const clean = (value: unknown) => String(value ?? "").trim();

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);

  if (!name || !email) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const details: [string, string][] = [
    ["Email", email],
    ["Phone", clean(body.phone)],
    ["Coaching", [clean(body.delivery), clean(body.interest)].filter(Boolean).join(" — ")],
    ["Availability", clean(body.availability)],
    ["Goal", clean(body.goal)],
    ["Training setup", clean(body.setup)],
  ];

  const lines = [`Hi Paul, I'm ${name} and I'd like to enquire about coaching.`];
  for (const [label, value] of details) {
    if (value) lines.push(`${label}: ${value}`);
  }

  const note = clean(body.message);
  if (note) lines.push("", note);

  const whatsapp = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({ ok: true, whatsapp });
}
