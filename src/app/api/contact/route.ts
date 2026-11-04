import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Body = {
  kind?: string;
  name?: string;
  email?: string;
  phone?: string;
  plan?: string;
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

  const email = clean(body.email);
  const name = clean(body.name);
  const guide = body.kind === "guide";

  if (!email || (!guide && !name)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const lines = guide
    ? [
        "Hi Paul, please send the high protein Indian vegan recipe book.",
        `Email: ${email}`,
      ]
    : [
        `Hi Paul, I'm ${name} and I'd like to apply for coaching.`,
        `Email: ${email}`,
        clean(body.phone) ? `Phone: ${clean(body.phone)}` : "",
        clean(body.plan) ? `Plan: ${clean(body.plan)}` : "",
        clean(body.message) ? "" : "",
        clean(body.message),
      ].filter((line) => line !== "");

  const whatsapp = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({ ok: true, whatsapp });
}
