import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars");
    return new NextResponse("Please configure the env variables", {
      status: 500,
    });
  }

  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const { error } = await resend.emails.send({
      // Until you verify your own domain on Resend, you must send FROM this address.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new NextResponse("Failed to send message", { status: 500 });
    }

    return NextResponse.json("Success!");
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
