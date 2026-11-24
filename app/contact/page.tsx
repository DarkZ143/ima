import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/contact-form";

export const metadata: Metadata = {
  title: "Contact IMA | Indian Medical Association",
  description: "Contact the Indian Medical Association national headquarters in New Delhi.",
};

export default function ContactPage() {
  return (
    <main className="content-page">
      <section className="contact-hero section-shell">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Contact</span></div>
        <p className="eyebrow">WE’RE HERE TO HELP</p>
        <h1>Let’s start a <span>conversation.</span></h1>
        <p className="inner-hero-lede">Reach the Indian Medical Association national headquarters for membership, initiatives, professional support or general enquiries.</p>
      </section>

      <section className="contact-layout section-shell">
        <div className="contact-sidebar">
          <article className="contact-info-card contact-address-card"><span className="contact-info-icon"><PinIcon /></span><p className="eyebrow">NATIONAL HEADQUARTERS</p><h2>Visit IMA House</h2><p>Indraprastha Estate, near ITO<br />New Delhi — 110002, India</p><a className="card-link" href="https://maps.google.com/?q=IMA+House+Indraprastha+Estate+New+Delhi" target="_blank" rel="noreferrer">Open directions <Arrow /></a><div className="map-illustration" aria-hidden="true"><span className="map-grid" /><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-pin"><PinIcon /></span><span className="map-label">IMA HOUSE</span></div></article>
          <article className="contact-info-card"><span className="contact-info-icon teal"><PhoneIcon /></span><p className="eyebrow">CALL HEADQUARTERS</p><h3>Speak with the IMA team</h3><a className="contact-detail" href="tel:+911123370009">+91 11 2337 0009</a><p className="contact-caption">EPABX · National Headquarters</p></article>
          <article className="contact-info-card"><span className="contact-info-icon blue"><MailIcon /></span><p className="eyebrow">EMAIL US</p><h3>Write to IMA</h3><a className="contact-detail" href="mailto:ima@ima-india.org">ima@ima-india.org</a><p className="contact-caption">For general enquiries and information</p></article>
          <div className="contact-quick-links"><p className="eyebrow">QUICK LINKS</p><Link href="/about">Learn about IMA <Arrow /></Link><Link href="/activities">Explore activities <Arrow /></Link><a href="https://www.ima-india.org/ima/memberarea/">Member portal <Arrow /></a></div>
        </div>
        <ContactForm />
      </section>

      <section className="section-shell contact-bottom-note"><span className="contact-note-mark"><ShieldIcon /></span><div><strong>Looking for member services?</strong><p>For digital membership services, certificates and profile support, visit the official member portal.</p></div><a className="button button-light" href="https://www.ima-india.org/ima/memberarea/">Open member portal <Arrow /></a></section>
    </main>
  );
}

function Arrow() { return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
function PinIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>; }
function PhoneIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.8L7.7 9.6a16 16 0 0 0 6.7 6.7l1.3-1.3a2 2 0 0 1 1.8-.6l2.8.5a2 2 0 0 1 1.7 2Z" /></svg>; }
function MailIcon() { return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>; }
function ShieldIcon() { return <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg>; }
