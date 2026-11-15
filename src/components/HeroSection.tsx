import { clinic } from "@/config/clinic";
import { EyeIcon, MapPinIcon, NavigationIcon, PhoneIcon, StethoscopeIcon, ToothIcon } from "./icons";

const fade = "motion-safe:animate-fade-up";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-brand-aqua via-white to-white"
    >
      {/* Soft decorative curves inspired by the flyer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[560px] w-[560px] rounded-full bg-brand-mint/70 blur-0 lg:-right-24 lg:h-[720px] lg:w-[720px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-10 -z-10 h-72 w-72 rounded-full border-[28px] border-brand-mint/60"
      />

      <div className="section-container grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-20">
        {/* Copy */}
        <div className="max-w-xl text-center lg:text-left">
          <span className={`eyebrow ${fade}`}>{clinic.tagline}</span>

          <h1
            id="hero-heading"
            className={`mt-5 text-[2.5rem] font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem] ${fade}`}
            style={{ animationDelay: "80ms" }}
          >
            Take Charge.{" "}
            <span className="bg-gradient-to-r from-brand-teal to-brand-deep bg-clip-text text-transparent">
              Live in Total Wellness.
            </span>
          </h1>

          <p
            className={`mt-5 text-lg font-medium text-brand-deep sm:text-xl ${fade}`}
            style={{ animationDelay: "160ms" }}
          >
            {clinic.supportingLine}
          </p>

          <p
            className={`mx-auto mt-3 flex items-center justify-center gap-2 text-base text-ink-muted lg:mx-0 lg:justify-start ${fade}`}
            style={{ animationDelay: "220ms" }}
          >
            <MapPinIcon className="h-5 w-5 shrink-0 text-brand-teal" />
            {clinic.address.full}
          </p>

          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start ${fade}`}
            style={{ animationDelay: "280ms" }}
          >
            <a href={clinic.phones[0].tel} className="btn btn--primary">
              <PhoneIcon />
              Call for an Appointment
            </a>
            <a href="#location" className="btn btn--outline">
              <NavigationIcon />
              Get Directions
            </a>
          </div>

          <div
            className={`mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start ${fade}`}
            style={{ animationDelay: "340ms" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
              Appointments
            </span>
            <ul className="flex flex-wrap justify-center gap-2">
              {clinic.phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={p.tel}
                    className="inline-flex items-center rounded-full border border-brand-mint bg-white px-3.5 py-1.5 text-sm font-semibold tabular-nums text-brand-deep transition-colors hover:border-brand-teal"
                  >
                    {p.raw}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Abstract brand motif — eye/spiral, no human photography */}
        <div
          className={`relative mx-auto w-full max-w-[420px] ${fade}`}
          style={{ animationDelay: "200ms" }}
          aria-hidden="true"
        >
          <div className="relative aspect-square">
            <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
              <defs>
                <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#08B7B0" />
                  <stop offset="55%" stopColor="#009F9A" />
                  <stop offset="100%" stopColor="#006B68" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="190" stroke="#CDEDEA" strokeWidth="2" strokeDasharray="4 10" />
              <circle cx="200" cy="200" r="160" fill="url(#hero-grad)" />
              <circle cx="200" cy="200" r="128" stroke="white" strokeOpacity="0.18" strokeWidth="18" />
              <path
                d="M92 200c26-44 63-66 108-66s82 22 108 66c-26 44-63 66-108 66s-82-22-108-66z"
                stroke="white"
                strokeWidth="9"
                strokeLinejoin="round"
              />
              <path d="M200 158a42 42 0 1 1-42 42" stroke="white" strokeWidth="9" strokeLinecap="round" />
              <circle cx="200" cy="200" r="13" fill="white" />
            </svg>

            {/* Service chips */}
            <div className="absolute left-0 top-[12%] flex items-center gap-2 rounded-2xl border border-brand-mint bg-white px-3 py-2 shadow-card sm:-left-4">
              <span className="icon-tile icon-tile--sm"><EyeIcon /></span>
              <span className="pr-1 text-sm font-semibold text-ink">Eye Care</span>
            </div>
            <div className="absolute right-0 top-[44%] flex items-center gap-2 rounded-2xl border border-brand-mint bg-white px-3 py-2 shadow-card sm:-right-4">
              <span className="icon-tile icon-tile--sm"><ToothIcon /></span>
              <span className="pr-1 text-sm font-semibold text-ink">Dental Care</span>
            </div>
            <div className="absolute bottom-[6%] left-[8%] flex items-center gap-2 rounded-2xl border border-brand-mint bg-white px-3 py-2 shadow-card">
              <span className="icon-tile icon-tile--sm"><StethoscopeIcon /></span>
              <span className="pr-1 text-sm font-semibold text-ink">General Medicine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
