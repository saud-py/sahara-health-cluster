import { clinic } from "@/config/clinic";
import { ServiceCard } from "./ServiceCard";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section-py bg-brand-aqua">
      <div className="section-container">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="Comprehensive Care, Under One Roof"
          description="Eye, dental and general medical care for you and your family — all at one welcoming centre in Amruthalli."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {clinic.services.map((service) => (
            <ServiceCard key={service.id} service={service} phoneTel={clinic.phones[0].tel} />
          ))}
        </div>
      </div>
    </section>
  );
}
