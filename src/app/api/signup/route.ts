import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type Body = {
  mode?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  plan?: string;
  goal?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const isLogin = body.mode === "login";
  const name = [body.firstName, body.lastName]
    .map((part) => String(part ?? "").trim())
    .filter(Boolean)
    .join(" ");

  if (!email || (!isLogin && !name)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const lines = isLogin
    ? ["Hi Paul, I'd like access to my MFF client account.", `Email: ${email}`]
    : [
        `Hi Paul, I'd like to sign up. I'm ${name}.`,
        `Email: ${email}`,
        body.phone ? `Mobile: ${String(body.phone).trim()}` : "",
        body.plan ? `Plan: ${String(body.plan).trim()}` : "",
        body.goal ? `Goal: ${String(body.goal).trim()}` : "",
      ].filter(Boolean);

  const text = lines.join("\n");
  const whatsapp = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

  return NextResponse.json({ ok: true, whatsapp });
}
