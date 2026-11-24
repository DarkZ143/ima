"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const initialFinishedRef = useRef(false);
  const previousPathRef = useRef(pathname);
  const pendingPathRef = useRef<string | null>(null);

  const showForOneSecond = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    timerRef.current = setTimeout(() => {
      pendingPathRef.current = null;
      setIsLoading(false);
      timerRef.current = null;
    }, 1000);
  }, []);

  useEffect(() => {
    let initialTimer: ReturnType<typeof setTimeout> | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    const closeLoader = () => {
      initialFinishedRef.current = true;
      setIsLoading(false);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
    const startInitialTimer = () => {
      if (initialTimer) return;
      initialTimer = setTimeout(closeLoader, 2000);
    };
    fallbackTimer = setTimeout(closeLoader, 7000);

    if (document.readyState === "complete") startInitialTimer();
    else window.addEventListener("load", startInitialTimer, { once: true });

    return () => {
      if (initialTimer) clearTimeout(initialTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      window.removeEventListener("load", startInitialTimer);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (previousPathRef.current === pathname) return;
    previousPathRef.current = pathname;

    const currentPath = pathname.replace(/\/$/, "") || "/";
    if (pendingPathRef.current === currentPath) {
      pendingPathRef.current = null;
      return;
    }

    if (initialFinishedRef.current) showForOneSecond();
  }, [pathname, showForOneSecond]);

  function handleInternalNavigation(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement) || anchor.target === "_blank") return;

    const destination = new URL(anchor.href, window.location.href);
    if (destination.origin !== window.location.origin) return;
    const nextPath = destination.pathname.replace(/\/$/, "") || "/";
    const currentPath = pathname.replace(/\/$/, "") || "/";
    if (nextPath === currentPath) return;

    pendingPathRef.current = nextPath;
    showForOneSecond();
  }

  return (
    <div className="site-shell" onClickCapture={handleInternalNavigation}>
      {children}
      {isLoading ? (
        <div className="loading-screen" role="status" aria-label="Loading IMA page" aria-live="polite">
          <div className="loader-content">
            <div className="loader" aria-hidden="true">
              {Array.from({ length: 7 }, (_, index) => <span className="loader-square" key={index} />)}
            </div>
            <span className="loading-label"><i /> IMA INDIA</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
