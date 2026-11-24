"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `${values.get("topic")} — IMA website enquiry`;
    const body = `Name: ${values.get("name")}\nEmail: ${values.get("email")}\n\n${values.get("message")}`;
    window.location.href = `mailto:ima@ima-india.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with this message ready to send. If it doesn’t, email ima@ima-india.org directly.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading"><p className="eyebrow">SEND A MESSAGE</p><h2>How can we help?</h2><p>Share a few details and we’ll direct your enquiry to the right team.</p></div>
      <div className="form-field-grid">
        <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      </div>
      <label>Enquiry type<select name="topic" defaultValue="General enquiry"><option>General enquiry</option><option>Membership</option><option>Media & publications</option><option>Public health initiative</option><option>Professional support</option></select></label>
      <label>Your message<textarea name="message" rows={5} placeholder="Tell us a little about your enquiry..." required /></label>
      <div className="contact-submit-row"><button className="button button-primary button-large" type="submit">Prepare email <Arrow /></button><span>Your message opens in your email app.</span></div>
      {status ? <p className="contact-status" role="status">{status}</p> : null}
    </form>
  );
}

function Arrow() { return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
