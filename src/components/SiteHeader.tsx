"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { clinic } from "@/config/clinic";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-mint/80 bg-white/90 backdrop-blur-md shadow-soft"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="section-container flex h-16 items-center justify-between gap-4">
        <Logo showWordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => {
            const active =
              pathname === "/" && l.href === "/"
                ? true
                : pathname !== "/" && l.href.startsWith("/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-brand-teal"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={clinic.phones[0].tel}
          className="hidden sm:inline-flex whitespace-nowrap btn btn--primary px-5 py-2.5 text-sm"
        >
          Call Now
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-mint text-brand-teal md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-mint bg-white md:hidden">
          <nav className="section-container flex flex-col gap-1 py-3" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mint"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={clinic.phones[0].tel}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-teal px-4 py-3 text-base font-semibold text-white"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}