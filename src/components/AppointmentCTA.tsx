import { clinic } from "@/config/clinic";
import { PhoneIcon } from "./icons";

export function AppointmentCTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-white py-4 sm:py-8">
      <div className="section-container">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-teal via-[#00857F] to-brand-deep px-6 py-14 text-center text-white sm:px-12 md:py-20">
          {/* Decorative curves */}
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full border-[36px] border-white/10" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-20 -z-10 h-80 w-80 rounded-full bg-white/[0.06]" />

          <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
            Book an Appointment
          </span>
          <h2 id="cta-heading" className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Your Health, Our Priority
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Ready to take charge of your wellness? Call us to schedule your visit at our
            Amruthalli centre — our team will help you choose a convenient time.
          </p>

          <ul className="mx-auto mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
            {clinic.phones.map((p, i) => (
              <li key={p.raw}>
                <a
                  href={p.tel}
                  className={`btn w-full tabular-nums ${i === 0 ? "btn--white" : "btn--ghost-light"}`}
                  aria-label={`Call Now on ${p.raw}`}
                >
                  <PhoneIcon />
                  {p.raw}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-white/80">
            Appointments are confirmed directly by the clinic over the phone.
          </p>
        </div>
      </div>
    </section>
  );
}
