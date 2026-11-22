import Image from "next/image";
import { clinic } from "@/config/clinic";
import { PhoneIcon } from "@/components/icons";

const PHONES = clinic.phones;

export function HeroSection() {
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
              "animate-[fade-up_0.6s_ease-out_both]",
            ].join(" ")}
            style={{ animationDelay: "0.05s" }}
          >
            {clinic.tagline}
          </span>

          <h1 className="text-display text-4xl md:text-5xl font-bold text-ink leading-[1.15] tracking-tight">
            {clinic.campaignHeadline}
          </h1>

          <p className={[
            "text-lg md:text-xl text-brand-deep/90 leading-relaxed",
            "animate-[fade-up_0.6s_ease-out_both]",
          ].join(" ")}
            style={{ animationDelay: "0.35s" }}
          >
            {clinic.supportingLine}
          </p>

          <p className={[
            "text-base text-ink-muted",
            "animate-[fade-up_0.6s_ease-out_both]",
          ].join(" ")}
            style={{ animationDelay: "0.5s" }}
          >
            {clinic.address.full}
          </p>

          <div className={["mt-7 flex flex-wrap gap-3", "animate-[fade-up_0.6s_ease-out_both]"].join(" ")} style={{ animationDelay: "0.65s" }}>
            <a
              href={clinic.phones[0].tel}
              className="btn btn--primary px-6 py-3 text-base flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call for an Appointment
            </a>
            <a
              href={clinic.directionsUrl || "#location"}
              data-track="directions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline px-6 py-3 text-base flex items-center gap-2"
            >
              Get Directions
            </a>
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

        {/* Right: supplied brand visual (no animation — it is the LCP image) */}
        <div className="flex justify-center relative">
          <Image
            src={clinic.assets.brandVisual.src}
            alt="Sahara Health Cluster eye mark with Eye Care, Dental Care and General Medicine"
            width={clinic.assets.brandVisual.width}
            height={clinic.assets.brandVisual.height}
            priority
            sizes="(max-width: 1024px) 90vw, 520px"
            className="h-auto w-full max-w-[520px]"
          />
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