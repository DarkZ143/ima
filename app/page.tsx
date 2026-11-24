"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "arrowUpRight"
  | "award"
  | "book"
  | "briefcase"
  | "calendar"
  | "check"
  | "chevron"
  | "cross"
  | "file"
  | "globe"
  | "heart"
  | "hospital"
  | "menu"
  | "network"
  | "shield"
  | "spark"
  | "users"
  | "x";

const icons: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M7 7h10v10" />,
  award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z" /><path d="M4 16.5A2.5 2.5 0 0 1 6.5 14H20M8 7h8m-8 3h6" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18m-13 4h2m4 0h2m-8 3h2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  cross: <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" />,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8m-8 4h8" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  hospital: <><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-4h6v4" /><path d="M12 7v6m-3-3h6" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="m10.5 6.5-4 9m7-9 4 9M7 18h10" /></>,
  shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11" /><path d="m9 12 2 2 4-4" /></>,
  spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z" /><path d="m19 14 1 2.5 2.5 1-2.5 1L19 21l-1-2.5-2.5-1 2.5-1z" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11 10v-2a4 4 0 0 0-3-3.9m-1-12a4 4 0 0 1 0 7.8" /></>,
  x: <path d="m18 6-12 12M6 6l12 12" />,
};

function Icon({ name, size = 18, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

const memberPortal = "https://www.ima-india.org/ima/memberarea/";
const announcements = [
  {
    label: "2026 notification",
    title: "IMA National Award Notification 2026",
    description: "Nominations are open for outstanding service to medicine and public health.",
    date: "Awards",
    kind: "Notices",
    icon: "award" as IconName,
    url: "https://ima-india.org/ima/pdfdata/IMA-National-Award-Notification-2026.pdf",
  },
  {
    label: "National drive",
    title: "Indian Immunization Week 2026",
    description: "Join IMA chapters in strengthening awareness and community immunization.",
    date: "Public health",
    kind: "Events",
    icon: "heart" as IconName,
    url: "https://www.ima-india.org/ima/",
  },
  {
    label: "JIMA · 2026",
    title: "Tender Notice for JIMA 2026",
    description: "Official updates and notices from the Journal of the Indian Medical Association.",
    date: "Journal",
    kind: "Notices",
    icon: "file" as IconName,
    url: "https://www.ima-india.org/ima/",
  },
  {
    label: "Official result",
    title: "Result — IMA Elections 2026–2028",
    description: "View the published results for the next national leadership term.",
    date: "Elections",
    kind: "Notices",
    icon: "users" as IconName,
    url: "https://www.imaec.org/_files/ugd/80e026_a4c5b0c1d6cf4e01a81b9923a38903d8.pdf",
  },
];

const leaders = [
  {
    name: "Dr AnilKumar J. Nayak",
    role: "National President",
    note: "Leading national healthcare policy, clinical safety initiatives and practitioner advocacy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCZzD2qMWCyC9Cc-k4uvsnA6Llil9khh6pSybkRdtM2uNQX8LRiCn9NA0QLCMUL8BnVis9e_14_GiGi9cYC2LNC-QtVQwzdXbUPWmKM7Bdourk6TrJXcKLlzcn9Ke5EdCr1z5nZxasKD_hwmLVsOhXKuH2ENxFI7l4ptiAFQZaS5_56RX7R6o-z5YHRBA_AEcjSBCGbPf9Dw0C_3D0YhYo7l_VKCOQgdnIpWfkBlidM",
  },
  {
    name: "Dr Dilip Bhanushali",
    role: "Immediate Past National President",
    note: "Providing institutional continuity, strategic counsel and oversight across standing committees.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvWtAaHnXfm7W16CxCSC8fureFNBKHNwryHMH6_DDWgMWqweWVj2-XmESgtvcaBmwrEpNDXy0_ykX6ZQAuSOa_EeHearpT4JMwBF8cuaWMVNa-N3W-DbbDoO8ykfq2CG7-6h-iElKdQKiGnLvtcT_2WBhBSCwzWeCujTkUbiA1BHs4YRhNLoJpBumrT69fxUw4GT4s_jnUJvxNLJ8mGaV0ltI4Q9Ra9Nf5q4_-Wf-F",
  },
  {
    name: "Dr Sarbari Dutta",
    role: "Honorary Secretary General",
    note: "Directing the national secretariat, state branch coordination and official communications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVzPYPuueO5Zf6cIDUHom1rbKIQOXy2RThPqHG9GR4m8ImiFXda2hfDYNh9ThRpN_q-hIcKa-VWaEt7Qbtl_JyJLaNhoUTYhU7m7daWgu0rXxEyDPCRnhAfDMGlG92W5Scn9Y7IG4sdcvPo_R3mnbhutzeSgrbcqoKbd9sG2lDwHAKtUG_PNtPHPXhv31hz6VIetqaejL8-mfYqujb-s9mjdqAmmn6NrRDRPXekicc",
  },
];

const services = [
  { icon: "shield" as IconName, title: "Digital ID card", copy: "Access your verified national IMA membership credentials.", action: "Open member portal", url: memberPortal },
  { icon: "award" as IconName, title: "Certificate of good standing", copy: "Request official membership verification and standing certificates.", action: "Request certificate", url: memberPortal },
  { icon: "users" as IconName, title: "Profile & CME credits", copy: "Keep your professional profile and learning record up to date.", action: "Update profile", url: memberPortal },
  { icon: "briefcase" as IconName, title: "IMA careers", copy: "Find clinical placements, fellowships and opportunities.", action: "Explore opportunities", url: "https://www.ima-india.org/ima/" },
];

const initiatives = [
  { icon: "globe" as IconName, tag: "Rural health", title: "Aao Gaon Chale", copy: "Local chapters bring preventive care, screening and health education closer to rural communities.", url: "https://www.ima-india.org/ima/free-way-page.php?pid=115", accent: "mint" },
  { icon: "heart" as IconName, tag: "Disease eradication", title: "End TB & online TB notification", copy: "Support timely diagnosis, case reporting and India’s TB-free mission.", url: "https://www.ima-india.org/ima/left-side-bar.php?pid=477", accent: "blue" },
  { icon: "book" as IconName, tag: "Antimicrobial stewardship", title: "AMR Smart Hospital Initiative", copy: "Promote responsible antimicrobial use and safer hospital practices.", url: "https://www.ima-india.org/ima/", accent: "violet" },
  { icon: "spark" as IconName, tag: "Clinical quality", title: "IMA NABH initiative", copy: "Build quality systems and patient safety across healthcare facilities.", url: "https://www.ima-india.org/ima/free-way-page.php?pid=288", accent: "mint" },
];

const wings = [
  { icon: "hospital" as IconName, title: "IMA CGP", eyebrow: "General practice", copy: "College of General Practitioners advances postgraduate learning and primary care excellence.", url: "https://www.ima-india.org/ima/" },
  { icon: "award" as IconName, title: "IMA AMS", eyebrow: "Medical specialties", copy: "Academy of Medical Specialties supports specialist education and clinical standards.", url: "https://www.ima-ams.com/" },
  { icon: "shield" as IconName, title: "IMA NPPS", eyebrow: "Member protection", copy: "Professional protection and legal support for eligible IMA members.", url: "https://www.nimapps.com/" },
  { icon: "heart" as IconName, title: "IMA Social Security Scheme", eyebrow: "Welfare & security", copy: "Social security support built around the needs of the medical community.", url: "https://www.ima-india.org/ima/" },
];

const tabs = ["Important updates", "Press & notices", "Events"] as const;
type BulletinTab = (typeof tabs)[number];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-title">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<BulletinTab>(tabs[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [lookupMessage, setLookupMessage] = useState("");

  const visibleAnnouncements = announcements.filter((item) => {
    const matchesTab =
      activeTab === "Important updates" ||
      (activeTab === "Press & notices" && item.kind === "Notices") ||
      (activeTab === "Events" && item.kind === "Events");
    const query = searchTerm.toLowerCase().trim();
    const matchesQuery = !query || `${item.title} ${item.description} ${item.label}`.toLowerCase().includes(query);
    return matchesTab && matchesQuery;
  });

  function submitLookup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!doctorId.trim()) {
      setLookupMessage("Enter an IMA Life Number or council registration ID.");
      return;
    }
    setLookupMessage("Live verification is available through the official IMA member portal.");
  }

  return (
    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-dot" /> NATIONAL HEADQUARTERS <i /> EST. 1928</div>
          <h1>Voice of <span>400,000+</span><br className="desktop-break" /> doctors across India.</h1>
          <p className="hero-description">India’s largest representative voluntary organization of doctors of modern scientific medicine, championing clinical excellence, medical ethics and public health since 1928.</p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="https://www.ima-india.org/ima/left-side-bar.php?pid=76"><Icon name="users" size={17} /> Become an IMA member</a>
            <a className="button button-light button-large" href="#verify"><Icon name="shield" size={17} /> Doctor verification</a>
            <a className="button button-quiet button-large" href={memberPortal}><Icon name="book" size={17} /> Access e-JIMA</a>
          </div>
          <div className="trust-row"><span><Icon name="globe" size={15} /> Founding member: WMA & CMAAO</span><i /><span><Icon name="shield" size={15} /> 24/7 Legal & Defense Cell</span></div>
        </div>
        <div className="hero-visual">
          <div className="building-image" role="img" aria-label="Modern IMA headquarters in New Delhi" />
          <div className="building-caption"><span>IMA HOUSE · NEW DELHI</span><strong>Indraprastha Estate</strong><span className="verified-badge"><Icon name="check" size={12} /> NHQ verified</span></div>
          <div className="lookup-card" id="verify">
            <div className="lookup-heading"><span className="lookup-icon"><Icon name="users" size={18} /></span><div><strong>Clinician directory</strong><small>Official member services</small></div><span className="live-badge"><span /> Member portal</span></div>
            <form className="lookup-form" onSubmit={submitLookup}>
              <label className="sr-only" htmlFor="doctor-id">IMA Life Number or medical council registration ID</label>
              <input id="doctor-id" value={doctorId} onChange={(event) => { setDoctorId(event.target.value); setLookupMessage(""); }} placeholder="IMA Life Number or council ID" />
              <a className="state-select" href="https://www.ima-india.org/ima/">All State Branches <span>⌄</span></a>
              <button type="submit" className="button button-dark button-full"><Icon name="shield" size={15} /> Continue to verification</button>
              {lookupMessage ? <p className="lookup-message" role="status">{lookupMessage} <a href={memberPortal}>Open member portal <Icon name="arrowUpRight" size={12} /></a></p> : null}
            </form>
          </div>
          <div className="hero-float-note"><span className="note-icon"><Icon name="spark" size={17} /></span><span><strong>One community.</strong><small>Better care for every Indian.</small></span></div>
        </div>
      </section>

      <section className="stats-grid section-shell" aria-label="IMA at a glance">
        <article className="stat-card"><span className="stat-icon blue"><Icon name="users" size={19} /></span><span className="stat-trend">↗ Pan-India</span><strong>400K<span>+</span></strong><small>Registered doctors</small><div className="stat-line blue-line" /></article>
        <article className="stat-card"><span className="stat-icon cyan"><Icon name="hospital" size={19} /></span><span className="stat-trend">↗ Nationwide</span><strong>33<span>+</span></strong><small>State & UT branches</small><div className="stat-line navy-line" /></article>
        <article className="stat-card"><span className="stat-icon mint"><Icon name="network" size={19} /></span><span className="stat-trend">↗ Active network</span><strong>1,750<span>+</span></strong><small>Local chapters</small><div className="stat-line mint-line" /></article>
        <article className="stat-card stat-card-dark"><span className="stat-icon dark-icon"><Icon name="award" size={19} /></span><span className="stat-trend dark-trend">Since 1928</span><strong>96<span>+</span></strong><small>Years of leadership</small><p>Safeguarding modern medicine and clinician welfare.</p></article>
      </section>

      <section className="news-leadership section-shell" id="news">
        <div className="news-panel glass-panel">
          <div className="panel-header">
            <div><p className="eyebrow">OFFICIAL HEADQUARTERS FEED</p><h2>Announcements &<br className="news-break" /> gazetted bulletins</h2></div>
            <div className="news-search"><Icon name="file" size={16} /><label className="sr-only" htmlFor="news-search">Search announcements</label><input id="news-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search updates" /></div>
          </div>
          <div className="bulletin-tabs" role="tablist" aria-label="Bulletin categories">
            {tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "bulletin-tab selected" : "bulletin-tab"} onClick={() => setActiveTab(tab)}>{tab}</button>)}
          </div>
          <div className="bulletin-list" role="tabpanel">
            {visibleAnnouncements.length ? visibleAnnouncements.map((item) => (
              <a className="bulletin-row" href={item.url} key={item.title} target="_blank" rel="noreferrer">
                <span className="bulletin-icon"><Icon name={item.icon} size={17} /></span>
                <span className="bulletin-copy"><span className="bulletin-meta"><b>{item.label}</b><i />{item.date}</span><strong>{item.title}</strong><small>{item.description}</small></span>
                <span className="row-arrow"><Icon name="arrow" size={18} /></span>
              </a>
            )) : <div className="empty-state">No announcements match “{searchTerm}”. Try another search.</div>}
          </div>
          <a className="text-link" href="https://www.ima-india.org/ima/">View all announcements <Icon name="arrow" size={15} /></a>
        </div>

        <aside className="leadership-teaser glass-panel" id="about">
          <div className="teaser-top"><div><p className="eyebrow">NATIONAL LEADERSHIP · 2026</p><h2>IMA Office Bearers</h2></div><span className="teaser-icon"><Icon name="award" size={19} /></span></div>
          <div className="mini-leaders">
            {leaders.map((leader, index) => <div className="mini-leader" key={leader.name}><div className={`mini-avatar avatar-${index}`} role="img" aria-label={`Portrait of ${leader.name}`} style={{ backgroundImage: `url("${leader.image}")` }} /><div><strong>{leader.name}</strong><small>{leader.role}</small></div><Icon className="mini-chevron" name="chevron" size={15} /></div>)}
          </div>
          <a className="button button-soft button-full" href="#leadership">Meet the national council <Icon name="arrow" size={15} /></a>
          <p className="leadership-note">Elected national stewards guiding medical education, policy and practitioner advocacy from IMA headquarters.</p>
        </aside>
      </section>

      <section className="services-section section-shell" id="services">
        <SectionTitle eyebrow="DIGITAL IMA" title="Essential doctor services" description="Everyday tools and services for active IMA members." />
        <div className="services-grid">
          {services.map((service, index) => <a className="service-card" href={service.url} key={service.title}><span className={`service-icon service-icon-${index}`}><Icon name={service.icon} size={19} /></span><strong>{service.title}</strong><p>{service.copy}</p><span className="card-link">{service.action} <Icon name="arrow" size={14} /></span></a>)}
        </div>
      </section>

      <section className="initiatives-section section-shell" id="initiatives">
        <SectionTitle eyebrow="NATIONAL PUBLIC HEALTH AGENDA" title="Initiatives that reach every community" description="From rural outreach to safer care, IMA members turn public health priorities into local action." />
        <div className="initiative-feature">
          <div className="initiative-photo" role="img" aria-label="Doctors supporting a community health outreach program"><div className="photo-overlay"><span>FLAGSHIP INITIATIVE</span><strong>Care that meets people where they are.</strong></div></div>
          <div className="initiative-feature-copy"><span className="tag tag-mint">RURAL HEALTH OUTREACH</span><h3>Aao Gaon Chale</h3><p>IMA chapters bring preventive screening, maternal and child health education, hygiene awareness and essential primary care closer to villages across India.</p><div className="feature-metrics"><span><strong>32</strong> states reached</span><span><strong>1,200+</strong> villages adopted</span></div><a className="button button-dark" href="https://www.ima-india.org/ima/free-way-page.php?pid=115" target="_blank" rel="noreferrer">Explore the initiative <Icon name="arrow" size={15} /></a></div>
        </div>
        <div className="initiatives-grid">
          {initiatives.map((initiative) => <a className={`initiative-card accent-${initiative.accent}`} href={initiative.url} key={initiative.title} target="_blank" rel="noreferrer"><div className="initiative-card-top"><span className="initiative-icon"><Icon name={initiative.icon} size={18} /></span><span className="tag">{initiative.tag}</span></div><h3>{initiative.title}</h3><p>{initiative.copy}</p><span className="card-link">Learn more <Icon name="arrow" size={14} /></span></a>)}
        </div>
      </section>

      <section className="wings-section section-shell" id="wings">
        <SectionTitle eyebrow="THE IMA ECOSYSTEM" title="Stronger together, across every specialty" description="Academic wings, member welfare and professional support come together under one national association." />
        <div className="wings-grid">
          {wings.map((wing, index) => <a className={`wing-card wing-${index}`} href={wing.url} key={wing.title} target="_blank" rel="noreferrer"><span className="wing-icon"><Icon name={wing.icon} size={20} /></span><span className="wing-eyebrow">{wing.eyebrow}</span><h3>{wing.title}</h3><p>{wing.copy}</p><span className="card-link">Explore wing <Icon name="arrow" size={14} /></span></a>)}
        </div>
        <div className="member-banner"><div className="banner-emblem"><Icon name="cross" size={27} /></div><div className="banner-copy"><p className="eyebrow">MEMBERSHIP · PROFESSIONAL COMMUNITY</p><h2>Join the vanguard of modern medicine.</h2><p>Be part of a national voice advancing clinical excellence, medical ethics and clinician welfare.</p></div><a className="button button-white" href="https://www.ima-india.org/ima/left-side-bar.php?pid=76">Apply for membership <Icon name="arrow" size={15} /></a></div>
      </section>

      <section className="publications-section section-shell" id="publications">
        <div className="publication-intro"><p className="eyebrow">KNOWLEDGE · E-CONNECT</p><h2>Research, guidance<br />and a stronger voice.</h2><p>Explore IMA journals, digital publications and clinical guidance for the modern medical community.</p><a className="text-link" href="https://www.ima-india.org/ima/free-way-page.php?pid=346">Browse e-publications <Icon name="arrow" size={15} /></a></div>
        <div className="publication-cards">
          <a className="publication-card publication-main" href="https://www.ima-india.org/ima/left-side-bar.php?pid=113"><span className="publication-icon"><Icon name="book" size={19} /></span><span className="publication-overline">FLAGSHIP JOURNAL</span><h3>Journal of the Indian Medical Association</h3><p>Peer-reviewed clinical research, case reports and medical perspectives since 1930.</p><span className="card-link">Read JIMA <Icon name="arrow" size={14} /></span></a>
          <a className="publication-card" href="https://www.ima-india.org/ima/left-side-bar.php?pid=113"><span className="publication-icon mint"><Icon name="file" size={19} /></span><span className="publication-overline">DIGITAL BULLETIN</span><h3>e-IMA News</h3><p>Updates on policy, member initiatives and national activities.</p><span className="card-link">Read latest issue <Icon name="arrow" size={14} /></span></a>
          <a className="publication-card" href="https://www.ima-india.org/ima/free-way-page.php?pid=346"><span className="publication-icon lilac"><Icon name="spark" size={19} /></span><span className="publication-overline">CLINICAL GUIDANCE</span><h3>Clinical guidelines & e-books</h3><p>Evidence-based resources for primary and specialty care.</p><span className="card-link">Explore library <Icon name="arrow" size={14} /></span></a>
        </div>
      </section>

      <section className="leadership-section section-shell" id="leadership">
        <SectionTitle eyebrow="NATIONAL SECRETARIAT · TEAM IMA" title="Leadership with a purpose" description="Elected office bearers for the 2025–2026 term." />
        <div className="leaders-grid">
          {leaders.map((leader, index) => <article className="leader-card" key={leader.name}><div className={`leader-photo leader-photo-${index}`} role="img" aria-label={`Portrait of ${leader.name}`} style={{ backgroundImage: `url("${leader.image}")` }}><span className="leader-year">2025–2026</span></div><div className="leader-details"><span className="leader-role">{leader.role}</span><h3>{leader.name}</h3><p>{leader.note}</p></div></article>)}
          <article className="leader-card council-card"><span className="council-orbit"><Icon name="network" size={31} /></span><span className="leader-role">A NATIONAL COMMUNITY</span><h3>One association.<br />Every medical voice.</h3><p>IMA chapters connect doctors, medical colleges and communities across India.</p><a className="card-link" href="https://www.ima-india.org/ima/left-side-bar.php?pid=770">View the full council <Icon name="arrow" size={14} /></a></article>
        </div>
      </section>

      <section className="about-strip section-shell">
        <div><span className="about-icon"><Icon name="globe" size={21} /></span><div><p className="eyebrow">GLOBAL AFFILIATIONS</p><h3>India’s doctors, connected to the world.</h3><p>Founding member of the World Medical Association (WMA) and the Confederation of Medical Associations in Asia and Oceania (CMAAO).</p></div></div>
        <a className="button button-light" href="https://www.wma.net/">Explore our affiliations <Icon name="arrowUpRight" size={15} /></a>
      </section>

    </main>
  );
}
