import Image from "next/image";
import { clinic } from "@/config/clinic";
import { EyeIcon, StethoscopeIcon, ToothIcon } from "./icons";

const { reception, eyeRoom } = clinic.assets.photos;

const HIGHLIGHTS = [
  { icon: EyeIcon, label: "Eye Care" },
  { icon: ToothIcon, label: "Dental Care" },
  { icon: StethoscopeIcon, label: "General Medical Care" },
];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-py bg-white">
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo collage — real clinic photos */}
        <div className="relative pb-10 pr-6 sm:pb-14 sm:pr-12">
          <div className="overflow-hidden rounded-[1.5rem] shadow-card">
            <Image
              src={reception.src}
              alt={reception.alt}
              width={reception.width}
              height={reception.height}
              sizes="(max-width: 1024px) 90vw, 520px"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[46%] overflow-hidden rounded-2xl border-4 border-white shadow-card">
            <Image
              src={eyeRoom.src}
              alt={eyeRoom.alt}
              width={eyeRoom.width}
              height={eyeRoom.height}
              sizes="(max-width: 1024px) 45vw, 240px"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-4 py-2.5 shadow-soft backdrop-blur">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-teal">Amruthalli</p>
            <p className="text-sm font-semibold text-ink">Bangalore – 560092</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow">About the Clinic</span>
          <h2 id="about-heading" className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {clinic.trustLine}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {clinic.name} is an eye, dental and general medical centre in Amruthalli,
            Bangalore — bringing everyday care for the whole family together under one roof.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Every visit is designed to feel clear, calm and unhurried, with a team that
            listens first and explains every step.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-brand-mint bg-brand-aqua px-4 py-3"
              >
                <span className="icon-tile icon-tile--sm bg-white">
                  <Icon />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink">{label}</span>
              </li>
            ))}
          </ul>

          <figure className="mt-8 border-l-4 border-brand-teal pl-5">
            <blockquote className="text-display text-2xl font-semibold text-brand-deep">
              {clinic.brandLine}
            </blockquote>
            <figcaption className="mt-1 text-sm text-ink-muted">The promise behind every appointment.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
