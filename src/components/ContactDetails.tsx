import { clinic } from "@/config/clinic";
import { ClockIcon, MapPinIcon, PhoneIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function ContactDetails() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-py bg-white">
      <div className="section-container">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get in Touch"
          title="Contact Us"
          description="The quickest way to book is a phone call — we’re happy to help."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          <div className="card flex h-full flex-col p-7">
            <span className="icon-tile">
              <PhoneIcon />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">Call for an Appointment</h3>
            <ul className="mt-3 space-y-2">
              {clinic.phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={p.tel}
                    className="text-lg font-semibold tabular-nums text-brand-deep underline-offset-4 hover:underline"
                  >
                    {p.raw}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card flex h-full flex-col p-7">
            <span className="icon-tile">
              <MapPinIcon />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">Visit Us</h3>
            <address className="mt-3 text-base not-italic leading-relaxed text-ink-muted">
              {clinic.name}
              <br />
              {clinic.address.full}
            </address>
            <a
              href="#location"
              className="mt-auto inline-flex pt-4 text-[15px] font-semibold text-brand-deep underline-offset-4 hover:underline"
            >
              See location details
            </a>
          </div>

          <div className="card flex h-full flex-col p-7">
            <span className="icon-tile">
              <ClockIcon />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">Timings</h3>
            {clinic.openingHours.length > 0 ? (
              <ul className="mt-3 space-y-1 text-base text-ink-muted">
                {clinic.openingHours.map((h) => (
                  <li key={h.days}>
                    <span className="font-semibold text-ink">{h.days}:</span> {h.hours}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                Please call ahead to confirm consultation timings before your visit.
              </p>
            )}
            {clinic.email ? (
              <a
                href={`mailto:${clinic.email}`}
                className="mt-auto pt-4 text-[15px] font-semibold text-brand-deep underline-offset-4 hover:underline"
              >
                {clinic.email}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
