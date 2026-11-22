import Image from "next/image";
import { clinic } from "@/config/clinic";

export function AboutSection() {
  return (
    <section className="section-py bg-white">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="card overflow-hidden">
              <Image
                src="/images/clinic-interior.webp"
                alt="Interior of Sahara Health Cluster clinic in Amruthalli"
                width={640}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-brand-teal px-5 py-4 text-white shadow-card md:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                {clinic.tagline}
              </p>
              <p className="text-sm font-medium">{clinic.trustLine}</p>
            </div>
          </div>

          <div className="space-y-5">
            <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
              About the Clinic
            </span>
            <h2 className="text-display text-3xl font-bold text-ink md:text-4xl">
              {clinic.trustLine}
            </h2>
            <p className="text-base text-ink-muted leading-relaxed">
              {clinic.name} is an {clinic.tagline.toLowerCase().replace("&", "and")} based in {clinic.address.full}.
              Our mission is simple: to deliver {clinic.brandLine.toLowerCase()} through
              experienced specialists, advanced technology, and compassionate, personalised care.
            </p>
            <p className="text-base text-ink-muted leading-relaxed">
              We serve the Amruthalli community and surrounding areas, offering eye, dental,
              and general medical care under one roof. Every visit is designed to be clear,
              comfortable, and supported by a team that puts your health first.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Clinic", value: clinic.name },
                { label: "Location", value: clinic.address.full },
                { label: "Phone", value: clinic.phones[0].raw },
                { label: "Care", value: clinic.tagline },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-brand-aqua p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-deep">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}