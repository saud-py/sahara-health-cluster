import { clinic } from "@/config/clinic";

/**
 * Frequently asked questions built ONLY from confirmed clinic facts
 * (name, services, address, phone numbers). Also emitted as FAQPage
 * structured data so the answers can appear directly in Google results.
 * Do not add questions whose answers are unconfirmed.
 */
function buildFaqs() {
  const phoneList = clinic.phones.map((p) => p.raw).join(", ");
  const faqs = [
    {
      q: `Where is ${clinic.name} located?`,
      a: `${clinic.name} is located in ${clinic.address.full}. Scan the location QR code on this page, or call us on ${phoneList} and our team will guide you to the centre.`,
    },
    {
      q: `What services does ${clinic.name} offer?`,
      a: `We are an ${clinic.tagline.replace("&", "and")} offering eye care, dental care and general medical care under one roof in Amruthalli, Bangalore.`,
    },
    {
      q: "How do I book an appointment?",
      a: `Call us on ${phoneList} to book your appointment. Appointments are confirmed directly by the clinic over the phone.`,
    },
  ];

  if (clinic.openingHours.length > 0) {
    faqs.push({
      q: "What are the clinic timings?",
      a: clinic.openingHours.map((h) => `${h.days}: ${h.hours}`).join("; ") + ".",
    });
  } else {
    faqs.push({
      q: "What are the clinic timings?",
      a: `Please call us on ${phoneList} to check today's timings and book a convenient slot before your visit.`,
    });
  }
  return faqs;
}

export function FaqSection() {
  const faqs = buildFaqs();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="section-py bg-white" aria-labelledby="faq-heading">
      <div className="section-container max-w-3xl">
        <div className="section-head">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
            FAQs
          </span>
          <h2 id="faq-heading" className="mt-4 text-3xl md:text-4xl text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group card p-0 open:shadow-card [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-ink">
                {f.q}
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-brand-teal transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-base leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
