import { clinic } from "@/config/clinic";
import { ServiceCard, type Service } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="section-container">
        <div className="section-head">
          <span className="inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-deep tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl text-ink">Comprehensive Care, Under One Roof</h2>
          <p className="sub">
            From routine check-ups to specialised care, our team is here to support you and your family.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {clinic.services.map((service: Service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}