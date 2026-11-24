"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/activities", label: "Activities" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <div className="utility-bar">
        <div className="utility-inner">
          <a className="alert-pill" href="https://www.ima-india.org/ima/">
            <span className="alert-dot" /> NATIONAL UPDATE
          </a>
          <p className="utility-message">IMA National Headquarters · Strengthening modern medicine across India</p>
          <div className="utility-links">
            <a href="tel:+911123370009">Helpline: +91 11 2337 0009</a>
            <a href="mailto:ima@ima-india.org">ima@ima-india.org</a>
            <a href="https://www.ima-india.org/ima/">State directory ↗</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" onClick={closeMenu} aria-label="IMA India home">
            <Image className="brand-logo-img" src="/logo.jpg" alt="Indian Medical Association logo" width={1280} height={160} fetchPriority="high" />
          </Link>
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                href={link.href}
                onClick={closeMenu}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-nav-actions">
              <a className="button button-light button-full" href="https://www.ima-india.org/ima/memberarea/">Member portal</a>
              <a className="button button-primary button-full" href="https://www.ima-india.org/ima/left-side-bar.php?pid=76">Join IMA <Arrow /></a>
            </div>
          </nav>
          <div className="header-actions">
            <a className="button button-light portal-button" href="https://www.ima-india.org/ima/memberarea/">Member portal</a>
            <a className="button button-primary join-button" href="https://www.ima-india.org/ima/left-side-bar.php?pid=76">Join IMA <Arrow /></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
}

function Arrow() {
  return <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>;
}

function MenuIcon() {
  return <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}

function CloseIcon() {
  return <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m18 6-12 12M6 6l12 12" /></svg>;
}
