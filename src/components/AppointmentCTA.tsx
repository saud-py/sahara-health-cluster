import Link from "next/link";
import { clinic } from "@/config/clinic";

const PHONES = [...clinic.phones, ...clinic.secondaryPhones];

export function AppointmentCTA() {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Decorative accent behind the section */}
      <div className="absolute inset-0 bg-brand-teal/90 -z-10" />
      <div className="absolute top-0 left-0 w-full h-12">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,16 C300,16 600,0 900,0 C1200,0 1440,16 1440,16 L1440,32 L0,32 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="section-container relative z-10 max-w-3xl mx-auto text-center px-5 md:px-8">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white tracking-wide uppercase">
          Book an Appointment
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl text-white font-bold leading-tight">
          Your Health, Our Priority
        </h2>
        <p className="mt-4 text-white/90 text-base leading-relaxed md:text-lg">
          Ready to take charge of your wellness? Call us today to schedule your
          visit at our Amruthalli clinic.
        </p>

        <div className="mt-8 space-y-4 md:flex md:flex-row md:justify-center md:items-center md:space-y-0 md:space-x-4 gap-3">
          {PHONES.map((p) => (
            <a
              key={p.raw}
              href={p.tel}
              className="flex items-center justify-center gap-2 btn btn--outline px-6 py-3 text-base text-brand-deep font-semibold"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 0 7h0c0 2.06.42 4.11 1.23 5.74" />
              </svg>
              {p.raw}
            </a>
          ))}
          <Link
            href="#contact"
            className="btn btn--primary px-8 py-3 text-base flex items-center justify-center gap-2 md:ml-2"
          >
            Book Now →
          </Link>
        </div>

        <p className="mt-6 text-xs text-white/60 uppercase tracking-widest">
          Appointments are confirmed directly by the clinic when you call.
        </p>
      </div>
    </section>
  );
}