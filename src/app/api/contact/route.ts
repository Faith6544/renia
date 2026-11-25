import { NextResponse } from "next/server";

import { CONTACT_EMAIL } from "@/lib/site";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  subject?: unknown;
  message?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200).toLowerCase();
  const phone = clean(payload.phone, 60);
  const subject = clean(payload.subject, 160);
  const message = clean(payload.message, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || !message) {
    return NextResponse.json(
      { error: "Name, a valid email and a message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const from = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    `Subject: ${subject || "Message from the Renia website"}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: subject || "New message from the Renia website",
        text,
      }),
    });

    if (!response.ok) {
      console.error("Resend email request failed:", await response.text());
      return NextResponse.json(
        { error: "Email could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend email request failed:", error);
    return NextResponse.json(
      { error: "Email could not be sent." },
      { status: 502 },
    );
  }
}
