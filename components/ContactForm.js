"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
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
        <input
          type="text"
          name="subject"
          className="contact__input"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
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
