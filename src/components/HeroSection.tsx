"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clinic } from "@/config/clinic";
import { PhoneIcon } from "./icons";

const PHONES = clinic.phones;

export function HeroSection() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setReveal(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ scrollMarginTop: "88px" }}
    >
      {/* Decorative wave accents inspired by the flyer */}
      <div className="absolute top-0 left-0 w-full h-12">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,16 C300,16 600,0 900,0 C1200,0 1440,16 1440,16 L1440,32 L0,32 Z"
            fill="#E5F7F5"
          />
        </svg>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
        <div className="space-y-5">
          <span
            className={[
              "inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide",
              reveal ? "animate-[fade-up_0.6s_ease-out_both]" : "opacity-0",
            ].join(" ")}
            style={{ animationDelay: "0.05s" }}
          >
            {clinic.tagline}
          </span>

          <h1 className={[
            "text-display text-4xl md:text-5xl font-bold text-ink leading-[1.15] tracking-tight",
            reveal ? "animate-[fade-up_0.6s_ease-out_both]" : "opacity-0",
          ].join(" ")}
            style={{ animationDelay: "0.2s" }}
          >
            {clinic.campaignHeadline}
          </h1>

          <p className={[
            "text-lg md:text-xl text-brand-deep/90 leading-relaxed",
            reveal ? "animate-[fade-up_0.6s_ease-out_both]" : "opacity-0",
          ].join(" ")}
            style={{ animationDelay: "0.35s" }}
          >
            {clinic.supportingLine}
          </p>

          <p className={[
            "text-base text-ink-muted",
            reveal ? "animate-[fade-up_0.6s_ease-out_both]" : "opacity-0",
          ].join(" ")}
            style={{ animationDelay: "0.5s" }}
          >
            {clinic.address.full}
          </p>

          <div className={["mt-7 flex flex-wrap gap-3", reveal ? "animate-[fade-up_0.6s_ease-out_both]" : "opacity-0"].join(" ")} style={{ animationDelay: "0.65s" }}>
            <Link
              href={clinic.phones[0].tel}
              className="btn btn--primary px-6 py-3 text-base flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call for an Appointment
            </Link>
            <Link
              href="#location"
              className="btn btn--outline px-6 py-3 text-base flex items-center gap-2"
            >
              Get Directions
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-ink-muted">
            {PHONES.map((p, i) => (
              <span key={p.raw}>
                <a href={p.tel} className="text-brand-teal underline-offset-4 hover:underline font-medium">
                  {p.raw}
                </a>
                {i < PHONES.length - 1 && <span className="text-brand-mint">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Right: abstract brand motif — eye/spiral SVG, no human photography */}
        <div className={["flex justify-center relative", reveal ? "animate-[fade-up_0.8s_ease-out_both]" : "opacity-0"].join(" ")} style={{ animationDelay: "0.4s" }}>
          <div className="relative z-10 max-w-md mx-auto">
            <svg
              viewBox="0 0 200 200"
              className="w-full max-w-[340px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#009F9A" />
                  <stop offset="100%" stopColor="#006B68" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#heroGrad)" />
              <circle cx="100" cy="100" r="62" fill="none" stroke="#08B7B0" strokeWidth="10" strokeDasharray="60 40" />
              <path d="M55 100 Q55 60 100 60 Q145 60 145 100 Q145 140 100 140 Q55 140 55 100" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" />
              <circle cx="100" cy="100" r="7" fill="white" />
            </svg>
            <p className="absolute -bottom-10 left-0 right-0 text-xs text-brand-deep/70 text-center font-medium tracking-widest uppercase">
              Eye · Dental · General Medical Centre
            </p>
          </div>
        </div>
      </div>

      {/* Lower wave */}
      <div className="absolute bottom-0 left-0 w-full h-12">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,16 C300,16 600,0 900,0 C1200,0 1440,16 1440,16 L1440,32 L0,32 Z"
            fill="#F3FBFA"
          />
        </svg>
      </div>
    </section>
  );
}