import Link from "next/link";
import { clinic } from "@/config/clinic";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/config/nav";
import { MapPinIcon, PhoneIcon } from "./icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-white">
      <div className="section-container py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1.2fr] lg:gap-12">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              {clinic.trustLine}. {clinic.tagline} in Amruthalli, Bangalore.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-mint">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-white hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-mint">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-turquoise" />
                <address className="not-italic">{clinic.address.full}</address>
              </li>
              {clinic.phones.map((p) => (
                <li key={p.raw} className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 shrink-0 text-brand-turquoise" />
                  <a href={p.tel} className="tabular-nums text-white/80 transition-colors hover:text-white hover:underline underline-offset-4">
                    {p.raw}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-brand-mint">Book Now</h2>
            <p className="mt-4 text-sm text-white/80">Call us to book your appointment.</p>
            <a href={clinic.phones[0].tel} className="btn btn--white btn--sm mt-4">
              <PhoneIcon />
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 text-center text-xs text-white/65 sm:flex-row sm:text-left">
          <p>&copy; {year} {clinic.name}. All rights reserved.</p>
          <p>{clinic.brandLine}</p>
        </div>
      </div>
    </footer>
  );
}
