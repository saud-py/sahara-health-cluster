import { clinic } from "@/config/clinic";
import { ChipIcon, ClipboardIcon, HeartIcon, UsersIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

const ICONS = {
  users: UsersIcon,
  chip: ChipIcon,
  clipboard: ClipboardIcon,
  heart: HeartIcon,
} as const;

export function WhyChooseUs() {
  return (
    <section id="why" aria-labelledby="why-heading" className="section-py bg-white">
      <div className="section-container">
        <SectionHeading
          id="why-heading"
          eyebrow="Why Choose Sahara"
          title="Care You Can Trust"
          description="Four simple commitments guide how we look after every patient."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {clinic.careValues.map((value, i) => {
            const Icon = ICONS[value.icon as keyof typeof ICONS];
            return (
              <li key={value.title} className="card flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon />
                  </span>
                  <span aria-hidden="true" className="text-display text-3xl font-bold text-brand-mint">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug text-ink">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
