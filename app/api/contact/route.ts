// app/api/contact/route.ts

import { Resend } from "resend";
import { NextResponse, type NextRequest } from "next/server";

// ✅ Force Node.js runtime (Edge default causes issues with Resend SDK)
export const runtime = "nodejs";

// ✅ Check if RESEND_API_KEY exists
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.error("❌ RESEND_API_KEY is not set in .env.local");
}

const resend = new Resend(resendApiKey ?? "");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("📨 Contact form submission received:", body);

    const { name, email, subject, message } = body;

    // ✅ Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Attempt to send email
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "anjayainduwara@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New portfolio message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p style="white-space:pre-line">${message}</p>
      `,
    });

    console.log("✅ Resend email response:", result);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("💥 Error in contact route:", err);
    return NextResponse.json(
      { ok: false, error: (err as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
