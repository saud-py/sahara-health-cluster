"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { clinic } from "@/config/clinic";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/config/nav";


export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-shadow supports-[backdrop-filter]:bg-white/85",
        scrolled || open ? "border-brand-mint shadow-soft" : "border-transparent"
      )}
    >
      <div className="section-container flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[15px] font-medium text-ink-muted transition-colors hover:bg-brand-aqua hover:text-brand-deep"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href={clinic.phones[0].tel} className="btn btn--primary btn--sm hidden sm:inline-flex">
            <PhoneIcon />
            Call Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-mint text-brand-deep transition-colors hover:bg-brand-aqua md:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-brand-mint bg-white md:hidden"
      >
        <nav className="section-container flex flex-col gap-1 py-4" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-brand-aqua"
            >
              {l.label}
            </Link>
          ))}
          <a href={clinic.phones[0].tel} className="btn btn--primary mt-2 w-full">
            <PhoneIcon />
            Call {clinic.phones[0].raw}
          </a>
        </nav>
      </div>
    </header>
  );
}
