"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: form.name,
      first_name: form.name.trim().split(/\s+/)[0] || form.name,
      from_email: form.email,
      message: form.message,
    };

    try {
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });

      try {
        await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
      } catch (autoReplyError) {
        // The admin notification already went through - don't fail the
        // whole submission just because the auto-reply couldn't be sent.
        console.error("Auto-reply email error:", autoReplyError);
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form email error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="contact__form animate">
      <h3>Send Us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="contact__form-row">
          <input
            type="text"
            name="name"
            className="contact__input"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact__input"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          className="contact__input"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="btn btn--primary header-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p style={{ color: "green", marginTop: "10px" }}>
            Thanks! Your message has been sent — we&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
