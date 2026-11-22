"use client";

import { clinic } from "@/config/clinic";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/icons";

export function ContactDetails() {
  const PHONES = clinic.phones;

  return (
    <section id="contact" className="section-py bg-brand-aqua">
      <div className="section-container">
        <div className="section-head">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-ink">Contact Us</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          <div className="card flex flex-col gap-5 p-7">
            <div className="flex items-start gap-4">
              <MapPinIcon className="w-6 h-6 text-brand-teal flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep mb-1">
                  Visit Us
                </p>
                <p className="text-sm text-ink">{clinic.address.full}</p>
              </div>
            </div>
          </div>

          <div className="card flex flex-col gap-5 p-7">
            <div className="flex items-start gap-4">
              <PhoneIcon className="w-6 h-6 text-brand-teal flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep mb-1">
                  Call Us
                </p>
                <ul className="space-y-2">
                  {PHONES.map((p) => (
                    <li key={p.raw}>
                      <a
                        href={p.tel}
                        className="text-base font-medium text-ink underline-offset-4 hover:underline hover:text-brand-teal"
                      >
                        {p.raw}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {clinic.openingHours.length > 0 && (
          <div className="card flex flex-col gap-5 p-7">
            <div className="flex items-start gap-4">
              <ClockIcon className="w-6 h-6 text-brand-teal flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep mb-1">
                  Opening Hours
                </p>
                <ul className="space-y-1 text-sm text-ink">
                    {clinic.openingHours.map((h) => (
                      <li key={h.days}>
                        <span className="font-medium text-brand-deep">{h.days}</span>{" "}
                        {h.hours}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          )}

          {clinic.email && (
          <div className="card flex flex-col gap-5 p-7">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0 text-brand-deep text-xs font-semibold">
                ✎
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep mb-1">
                  Write to Us
                </p>
                <a
                    href={`mailto:${clinic.email}`}
                    className="text-base font-medium text-ink underline-offset-4 hover:underline"
                  >
                    {clinic.email}
                </a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}