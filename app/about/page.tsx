import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About IMA | Indian Medical Association",
  description: "Learn about the Indian Medical Association, its history, mission and leadership.",
};

const milestones = [
  { year: "1928", title: "Founded in Calcutta", copy: "Doctors came together to build a national organization for modern scientific medicine." },
  { year: "1946", title: "A national voice", copy: "IMA expanded its role in medical education, standards and public health." },
  { year: "1974", title: "IMA House, New Delhi", copy: "The national headquarters became a home for the association’s growing work." },
  { year: "Today", title: "Across every state", copy: "A nationwide network of doctors, state branches and local chapters serves communities." },
];

const values = [
  { number: "01", title: "Clinical excellence", copy: "Support lifelong learning and evidence-based practice across modern medicine." },
  { number: "02", title: "Ethics & trust", copy: "Uphold professional integrity and public confidence in the medical profession." },
  { number: "03", title: "A stronger profession", copy: "Represent doctors and protect their welfare, dignity and right to practice safely." },
  { number: "04", title: "Health for all", copy: "Work with communities and partners to improve health outcomes across India." },
];

const leaders = [
  { name: "Dr AnilKumar J. Nayak", role: "National President", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzD2qMWCyC9Cc-k4uvsnA6Llil9khh6pSybkRdtM2uNQX8LRiCn9NA0QLCMUL8BnVis9e_14_GiGi9cYC2LNC-QtVQwzdXbUPWmKM7Bdourk6TrJXcKLlzcn9Ke5EdCr1z5nZxasKD_hwmLVsOhXKuH2ENxFI7l4ptiAFQZaS5_56RX7R6o-z5YHRBA_AEcjSBCGbPf9Dw0C_3D0YhYo7l_VKCOQgdnIpWfkBlidM" },
  { name: "Dr Dilip Bhanushali", role: "Immediate Past National President", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvWtAaHnXfm7W16CxCSC8fureFNBKHNwryHMH6_DDWgMWqweWVj2-XmESgtvcaBmwrEpNDXy0_ykX6ZQAuSOa_EeHearpT4JMwBF8cuaWMVNa-N3W-DbbDoO8ykfq2CG7-6h-iElKdQKiGnLvtcT_2WBhBSCwzWeCujTkUbiA1BHs4YRhNLoJpBumrT69fxUw4GT4s_jnUJvxNLJ8mGaV0ltI4Q9Ra9Nf5q4_-Wf-F" },
  { name: "Dr Sarbari Dutta", role: "Honorary Secretary General", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVzPYPuueO5Zf6cIDUHom1rbKIQOXy2RThPqHG9GR4m8ImiFXda2hfDYNh9ThRpN_q-hIcKa-VWaEt7Qbtl_JyJLaNhoUTYhU7m7daWgu0rXxEyDPCRnhAfDMGlG92W5Scn9Y7IG4sdcvPo_R3mnbhutzeSgrbcqoKbd9sG2lDwHAKtUG_PNtPHPXhv31hz6VIetqaejL8-mfYqujb-s9mjdqAmmn6NrRDRPXekicc" },
];

export default function AboutPage() {
  return (
    <main className="content-page">
      <section className="inner-hero section-shell">
        <div className="inner-hero-copy">
          <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>About IMA</span></div>
          <p className="eyebrow">INSTITUTIONAL HERITAGE · EST. 1928</p>
          <h1>A national voice for <span>modern medicine.</span></h1>
          <p className="inner-hero-lede">The Indian Medical Association brings doctors together to advance medical science, advocate for the profession and help build a healthier India.</p>
          <div className="inner-hero-actions"><Link className="button button-primary button-large" href="/activities">Explore our work <Arrow /></Link><Link className="button button-light button-large" href="/contact">Talk to IMA <Arrow /></Link></div>
        </div>
        <div className="about-hero-card">
          <span className="hero-card-mark"><Cross /></span>
          <p className="eyebrow">OUR VISION</p>
          <blockquote>“To promote and advance medical and allied sciences, uphold the honour and dignity of the profession, and support accessible healthcare for every citizen.”</blockquote>
          <div className="vision-foot"><span>Founded in Calcutta</span><strong>1928</strong></div>
        </div>
      </section>

      <section className="about-facts section-shell">
        <div><strong>400,000<span>+</span></strong><small>Doctors represented</small></div>
        <div><strong>33<span>+</span></strong><small>State & UT branches</small></div>
        <div><strong>1,750<span>+</span></strong><small>Local chapters</small></div>
        <div><strong>1928</strong><small>Founded in Calcutta</small></div>
      </section>

      <section className="section-shell page-section">
        <div className="section-title"><div><p className="eyebrow">WHY WE’RE HERE</p><h2>Medicine moves forward together.</h2></div><p className="section-description">A voluntary professional association, built around the belief that doctors are stronger when they speak and serve together.</p></div>
        <div className="mission-grid">
          <article className="mission-card mission-primary"><span className="mission-symbol"><Cross /></span><p className="eyebrow">OUR MISSION</p><h3>Champion the practice of modern scientific medicine.</h3><p>IMA supports doctors through education, professional advocacy, ethical guidance and meaningful public health action.</p><Link className="card-link" href="/activities">See our activities <Arrow /></Link></article>
          <article className="mission-card mission-secondary"><span className="mission-symbol"><Globe /></span><p className="eyebrow">OUR REACH</p><h3>Local knowledge.<br />National impact.</h3><p>State branches and local chapters connect the national association with communities in every part of India.</p><Link className="card-link" href="/contact">Connect with IMA <Arrow /></Link></article>
        </div>
      </section>

      <section className="section-shell page-section values-section">
        <div className="section-title"><div><p className="eyebrow">WHAT GUIDES US</p><h2>Four commitments. One profession.</h2></div></div>
        <div className="values-grid">{values.map((value) => <article className="value-card" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.copy}</p><div className="value-rule" /></article>)}</div>
      </section>

      <section className="section-shell page-section history-section">
        <div className="section-title"><div><p className="eyebrow">A LEGACY OF SERVICE</p><h2>Nearly a century of progress.</h2></div><p className="section-description">From a gathering of doctors in Calcutta to a nationwide community shaping modern medicine.</p></div>
        <div className="timeline-grid">{milestones.map((item) => <article className="timeline-card" key={item.year}><span className="timeline-year">{item.year}</span><span className="timeline-marker" /><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section-shell page-section" id="leadership">
        <div className="section-title"><div><p className="eyebrow">NATIONAL LEADERSHIP · 2025–2026</p><h2>Doctors leading with purpose.</h2></div><a className="text-link" href="https://www.ima-india.org/ima/left-side-bar.php?pid=770">Full office bearers list <Arrow /></a></div>
        <div className="about-leaders-grid">{leaders.map((leader, index) => <article className="about-leader-card" key={leader.name}><div className={`about-leader-photo about-leader-${index}`} role="img" aria-label={`Portrait of ${leader.name}`} style={{ backgroundImage: `url("${leader.image}")` }} /><span>{leader.role}</span><h3>{leader.name}</h3></article>)}</div>
      </section>

      <section className="section-shell page-cta"><div><p className="eyebrow">BE PART OF THE COMMUNITY</p><h2>A stronger voice for better care.</h2><p>Connect with the association or discover how IMA members are making a difference.</p></div><div><Link className="button button-white" href="/contact">Contact IMA <Arrow /></Link><a className="button page-cta-outline" href="https://www.ima-india.org/ima/left-side-bar.php?pid=76">Membership information <Arrow /></a></div></section>
    </main>
  );
}

function Arrow() { return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
function Cross() { return <svg aria-hidden="true" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" /></svg>; }
function Globe() { return <svg aria-hidden="true" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></svg>; }
