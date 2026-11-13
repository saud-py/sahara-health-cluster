"use client";

import Link from "next/link";
import { clinic } from "@/config/clinic";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteFooter() {
  const PHONES = clinic.phones;

  return (
    <footer className="border-t border-mint bg-brand-deep text-white">
      <div className="section-container py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-4 md:col-span-1">
            <Logo light showWordmark={false} className="mb-4" />
            <p className="text-sm text-brand-aqua/90 leading-relaxed">
              {clinic.trustLine}. Delivering experienced care with advanced
              technology in {clinic.address.city}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-aqua underline-offset-4 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="text-brand-aqua/90 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>{clinic.address.full}</span>
              </li>
              {PHONES.map((p) => (
                <li key={p.raw} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 shrink-0 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 0 7h0c0 2.06.42 4.11 1.23 5.74" /></svg>
                  <a
                    href={p.tel}
                    className="text-brand-aqua underline-offset-4 hover:text-white transition-colors"
                  >
                    {p.raw}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-mint mb-4">
              Book Now
            </h3>
            <p className="mb-4 text-sm text-brand-aqua/90">
              Call us to book your appointment.
            </p>
            <a
              href={clinic.phones[0].tel}
              className="inline-flex items-center gap-2 btn btn--outline px-6 py-3 text-base text-white font-semibold border-white/30 hover:bg-white hover:text-brand-deep"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 0 7h0c0 2.06.42 4.11 1.23 5.74" /></svg>
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-aqua/70">
            &copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p className="text-xs text-brand-aqua/70">
            Unverified details are marked as placeholders — please confirm with
            the clinic before relying on them.
          </p>
        </div>
      </div>
    </footer>
  );
}