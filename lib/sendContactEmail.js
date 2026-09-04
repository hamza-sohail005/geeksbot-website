import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function sendContactEmail({ name, email, message }) {
  const templateParams = {
    from_name: name,
    first_name: name.trim().split(/\s+/)[0] || name,
    from_email: email,
    message,
  };

  await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });

  try {
    await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
  } catch (autoReplyError) {
    // The admin notification already went through - don't fail the
    // whole submission just because the auto-reply couldn't be sent.
    console.error("Auto-reply email error:", autoReplyError);
  }
}
