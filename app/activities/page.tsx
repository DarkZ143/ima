import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activities & Initiatives | Indian Medical Association",
  description: "Explore IMA's community health initiatives, clinical programs, education and publications.",
};

const programs = [
  { icon: "✳", tone: "mint", category: "Rural health", title: "Aao Gaon Chale", copy: "Village outreach through preventive screening, maternal health education and primary care.", detail: "Community programme", href: "https://www.ima-india.org/ima/free-way-page.php?pid=115" },
  { icon: "＋", tone: "blue", category: "Disease prevention", title: "End TB initiative", copy: "Support timely diagnosis, online notification and coordinated TB care in local communities.", detail: "National health mission", href: "https://www.ima-india.org/ima/left-side-bar.php?pid=477" },
  { icon: "⌁", tone: "violet", category: "Patient safety", title: "AMR Smart Hospitals", copy: "Help hospitals strengthen antimicrobial stewardship and responsible prescribing.", detail: "Clinical quality", href: "https://www.ima-india.org/ima/" },
  { icon: "◇", tone: "mint", category: "Healthcare quality", title: "IMA NABH initiative", copy: "Build practical quality systems and patient safety across healthcare facilities.", detail: "Accreditation support", href: "https://www.ima-india.org/ima/free-way-page.php?pid=288" },
  { icon: "♡", tone: "rose", category: "Public awareness", title: "Organ donation pledge", copy: "Encourage informed conversations and strengthen awareness of organ donation.", detail: "Public health advocacy", href: "https://www.ima-india.org/ima/" },
  { icon: "◎", tone: "blue", category: "Medical education", title: "Continuing medical education", copy: "Keep clinicians connected to current knowledge, skills and professional learning.", detail: "Learning & development", href: "https://www.ima-india.org/ima/" },
];

const eventRows = [
  { date: "NATIONAL", type: "Public health", title: "National awareness & screening initiatives", copy: "Find current drives and chapter activities through the IMA national updates." },
  { date: "CME", type: "Medical education", title: "Clinical education and specialty programmes", copy: "Explore continuing education opportunities from IMA wings and state branches." },
  { date: "CHAPTER", type: "Community", title: "Local branch meetings and community events", copy: "Connect with your state or local chapter for regional schedules and participation." },
];

export default function ActivitiesPage() {
  return (
    <main className="content-page">
      <section className="activity-hero section-shell">
        <div className="activity-hero-copy">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Activities</span></div>
          <p className="eyebrow">PUBLIC HEALTH · CLINICAL EXCELLENCE · COMMUNITY</p>
          <h1>Turning medical expertise into <span>meaningful action.</span></h1>
          <p className="inner-hero-lede">IMA brings doctors, chapters and partners together to improve health outcomes—from rural outreach to safer hospitals.</p>
          <div className="inner-hero-actions"><a className="button button-primary button-large" href="#programs">Explore activities <Arrow /></a><Link className="button button-light button-large" href="/contact">Partner with IMA <Arrow /></Link></div>
        </div>
        <div className="activity-hero-visual">
          <div className="activity-photo" role="img" aria-label="Indian doctors conducting a rural community health outreach camp" />
          <div className="activity-photo-caption"><span>ON THE GROUND</span><strong>Care that reaches every community.</strong></div>
          <div className="activity-photo-badge"><span>IMA</span><div><strong>Local chapters</strong><small>National impact</small></div></div>
        </div>
      </section>

      <section className="activity-metrics section-shell"><div><strong>1,750<span>+</span></strong><small>Local chapters</small></div><div><strong>33<span>+</span></strong><small>State & UT branches</small></div><div><strong>400K<span>+</span></strong><small>Doctors in our network</small></div><div className="metric-note"><span className="metric-pulse" /><p>Powered by doctors who volunteer their expertise to serve patients and communities.</p></div></section>

      <section className="section-shell page-section" id="programs">
        <div className="section-title"><div><p className="eyebrow">IMA IN ACTION</p><h2>Programmes for healthier communities.</h2></div><p className="section-description">National initiatives, clinical quality programmes and learning opportunities—delivered through our network.</p></div>
        <div className="program-grid">{programs.map((program) => <a className="program-card" key={program.title} href={program.href} target="_blank" rel="noreferrer"><div className="program-top"><span className={`program-icon ${program.tone}`}>{program.icon}</span><span className="program-category">{program.category}</span></div><h3>{program.title}</h3><p>{program.copy}</p><div className="program-bottom"><span>{program.detail}</span><span className="program-arrow"><Arrow /></span></div></a>)}</div>
      </section>

      <section className="section-shell page-section event-section" id="events">
        <div className="section-title"><div><p className="eyebrow">WHAT’S HAPPENING</p><h2>Take part. Learn. Connect.</h2></div><a className="text-link" href="https://www.ima-india.org/ima/">See IMA updates <Arrow /></a></div>
        <div className="event-panel">{eventRows.map((event) => <article className="event-row" key={event.title}><div className="event-date">{event.date}</div><div className="event-copy"><span>{event.type}</span><h3>{event.title}</h3><p>{event.copy}</p></div><a className="event-link" href="https://www.ima-india.org/ima/" aria-label={`Find details: ${event.title}`}><Arrow /></a></article>)}</div>
      </section>

      <section className="section-shell page-section publication-activity" id="publications">
        <div className="publication-art"><div className="journal-sheet"><span className="journal-mark">JIMA</span><span className="journal-line wide" /><span className="journal-line" /><span className="journal-block" /><span className="journal-line wide" /></div><div className="floating-paper"><span>IMA</span><div /><div /></div><span className="publication-orbit" /></div>
        <div className="publication-activity-copy"><p className="eyebrow">KNOWLEDGE · E-CONNECT</p><h2>Research, guidance and a stronger voice.</h2><p>Discover peer-reviewed research, clinical resources and publications connecting medical professionals across the country.</p><div className="publication-links"><a href="https://www.ima-india.org/ima/left-side-bar.php?pid=113"><span><b>01</b> Journal of the Indian Medical Association</span><Arrow /></a><a href="https://www.ima-india.org/ima/left-side-bar.php?pid=113"><span><b>02</b> e-IMA News</span><Arrow /></a><a href="https://www.ima-india.org/ima/free-way-page.php?pid=346"><span><b>03</b> Clinical guidelines & e-books</span><Arrow /></a></div></div>
      </section>

      <section className="section-shell page-cta"><div><p className="eyebrow">MAKE AN IMPACT IN YOUR COMMUNITY</p><h2>Good health takes all of us.</h2><p>Connect with a local chapter to find out how to contribute to IMA programmes.</p></div><div><Link className="button button-white" href="/contact">Get in touch <Arrow /></Link><Link className="button page-cta-outline" href="/about">About IMA <Arrow /></Link></div></section>
    </main>
  );
}

function Arrow() { return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
