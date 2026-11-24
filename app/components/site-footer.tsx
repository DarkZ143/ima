import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid section-shell">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/">
            <Image className="footer-logo-img" src="/logo.jpg" alt="Indian Medical Association logo" width={1280} height={160} />
          </Link>
          <p>The largest representative voluntary organization of doctors of modern scientific medicine in the world, safeguarding healthcare and clinician welfare across India.</p>
          <strong>IMA House, Indraprastha Estate</strong>
          <p>Near ITO, New Delhi — 110002, India<br />EPABX: +91 11 2337 0009<br /><a href="mailto:ima@ima-india.org">ima@ima-india.org</a></p>
        </div>
        <div className="footer-column"><h3>Explore IMA</h3><Link href="/about">About the association</Link><Link href="/about#leadership">Leadership & council</Link><Link href="/activities">Activities & initiatives</Link><Link href="/activities#publications">Publications</Link></div>
        <div className="footer-column"><h3>Get in touch</h3><Link href="/contact">Contact headquarters</Link><a href="tel:+911123370009">Call IMA headquarters</a><a href="mailto:ima@ima-india.org">Email IMA</a><a href="https://www.ima-india.org/ima/memberarea/">Member portal</a></div>
        <div className="footer-column footer-global"><h3>Global affiliations</h3><p>Founding member of the World Medical Association (WMA) and CMAAO.</p><a className="footer-legal" href="https://www.ima-india.org/ima/"><strong>LEGAL & DEFENSE CELL</strong><span>Rapid response legal counsel for verified active members.</span></a></div>
      </div>
      <div className="footer-bottom section-shell"><span>© 2026 Indian Medical Association. All rights reserved.</span><div><a href="https://www.ima-india.org/ima/">Privacy</a><i /> <a href="https://www.ima-india.org/ima/">Terms of service</a><i /> <a href="https://www.ima-india.org/ima/">RTI disclosures</a></div><span className="system-status"><i /> NHQ digital systems</span></div>
    </footer>
  );
}
