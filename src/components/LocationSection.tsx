"use client";

import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/config/clinic";
import { MapPinIcon, PhoneIcon } from "./icons";

export function LocationSection() {
  const directionsUrl = clinic.directionsUrl;
  const qrSrc = clinic.assets.qr;

  return (
    <section id="location" className="section-py bg-white">
      <div className="section-container">
        <div className="section-head">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
            Visit Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-ink">Find Our Centre</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Address + QR grouped together */}
          <div className="card p-8 lg:p-10">
            <h3 className="text-display text-2xl font-bold text-ink mb-3">
              {clinic.address.full}
            </h3>
            <p className="text-base text-ink-muted leading-relaxed mb-6">
              We are conveniently located in Amruthalli, Bangalore. Scan the code
              below to save our location on your phone and find directions easily.
            </p>

            <div className="mb-6 flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-brand-teal flex-shrink-0" />
              <p className="text-sm text-ink">{clinic.address.full}</p>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold text-brand-deep uppercase tracking-wide">
                Scan for Location
              </p>
              <div className="qr-wrap">
                <Image
                  src={qrSrc}
                  alt="Location QR code for Sahara Health Cluster, Amruthalli Bangalore"
                  width={200}
                  height={200}
                  priority
                  className="rounded-lg border border-mint shadow-sm"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                  }}
                />
              </div>
              <p className="text-[10px] text-ink-muted uppercase tracking-widest text-center">
                Open your camera and scan to save our location
              </p>
            </div>

            <div className="rounded-xl bg-brand-aqua p-5 border border-mint">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-brand-teal flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-ink-muted uppercase tracking-wide">
                    Call for Appointment
                  </p>
                  <a href={clinic.phones[0].tel} className="text-base font-medium text-ink underline-offset-4 hover:underline">
                    {clinic.phones[0].raw}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Directions button + map note */}
          <div className="flex flex-col gap-4">
            {directionsUrl ? (
              <Link
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 btn btn--primary px-8 py-4 text-base text-white font-semibold"
              >
                Get Directions
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div className="inline-flex items-center justify-center gap-2 btn btn--outline px-8 py-4 text-base text-brand-deep font-semibold disabled:opacity-50 disabled:pointer-events-none">
                Get Directions
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            )}
            <p className="text-xs text-ink-muted text-center">
              {directionsUrl
                ? "Opens in Google Maps in a new tab"
                : "Map link pending clinic owner confirmation"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}