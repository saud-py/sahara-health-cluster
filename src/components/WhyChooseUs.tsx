import { clinic } from "@/config/clinic";

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  "Experienced Specialists": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17 18a2 2 0 0 1 0 3H7a2 2 0 0 1 0-3" />
      <path d="M6 21V8l6-4 6 4v13" />
    </svg>
  ),
  "Advanced Technology": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  "Personalised Treatment Plans": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15h6M9 11h6" />
    </svg>
  ),
  "Compassionate Care": ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.4l7.8-7 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  ),
};

export function WhyChooseUs() {
  return (
    <section id="about" className="section-py bg-brand-aqua/60">
      <div className="section-container">
        <div className="section-head">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-ink">Care You Can Trust</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clinic.careValues.map((value) => {
            const Icon = ICONS[value];
            return (
              <div key={value} className="card flex flex-col gap-4 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mint text-brand-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-display text-lg font-bold text-ink">{value}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {value === "Experienced Specialists" &&
                    "A dedicated team of professionals committed to your wellbeing."}
                  {value === "Advanced Technology" &&
                    "Modern equipment and techniques to support accurate, effective care."}
                  {value === "Personalised Treatment Plans" &&
                    "Care tailored to your individual needs, not a one-size-fits-all approach."}
                  {value === "Compassionate Care" &&
                    "Kind, respectful support at every step of your health journey."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}