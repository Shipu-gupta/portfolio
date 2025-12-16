import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_qcrt8md",      // replace
        "template_a03ol5n",     // replace
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message
        },
        "lvbR-xWHB-PmsF12r"       // replace from EmailJS dashboard
      )
      .then(
        () => {
          setStatus("Message sent!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send. Try again later.");
        }
      );
  }

  return (
    <form className="card glass" onSubmit={sendEmail}>
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        rows="6"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button className="btn primary" type="submit">
        Send message
      </button>

      {status && <p className="muted">{status}</p>}
    </form>
  );
}
