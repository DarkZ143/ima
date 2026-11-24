import type { Metadata } from "next";
import PageTransition from "./components/page-transition";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indian Medical Association | A voice for modern medicine",
  description:
    "The Indian Medical Association brings together doctors across India to advance clinical excellence, medical ethics, public health and clinician welfare.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <PageTransition>
          <SiteHeader />
          {children}
          <SiteFooter />
        </PageTransition>
      </body>
    </html>
  );
}
