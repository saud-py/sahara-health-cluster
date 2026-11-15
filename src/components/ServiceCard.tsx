import { EyeIcon, ToothIcon, StethoscopeIcon, ArrowRightIcon } from "./icons";

const ICONS = {
  eye: EyeIcon,
  tooth: ToothIcon,
  stethoscope: StethoscopeIcon,
} as const;

export type Service = {
  id?: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
};

export function ServiceCard({ service, phoneTel }: { service: Service; phoneTel: string }) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? StethoscopeIcon;
  return (
    <article
      id={service.id}
      className="card group relative flex h-full flex-col overflow-hidden p-7 transition-transform duration-200 motion-safe:hover:-translate-y-1 sm:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-turquoise to-brand-deep opacity-0 transition-opacity group-hover:opacity-100"
      />
      <span className="icon-tile">
        <Icon />
      </span>
      <h3 className="mt-6 text-2xl font-bold text-ink">{service.title}</h3>
      <p className="mt-2 text-base font-semibold text-brand-teal">{service.tagline}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{service.description}</p>
      <div className="mt-auto pt-6">
        <a
          href={phoneTel}
          className="inline-flex items-center gap-1.5 rounded-lg text-[15px] font-semibold text-brand-deep underline-offset-4 hover:underline"
        >
          Book an appointment
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          <span className="sr-only"> for {service.title}</span>
        </a>
      </div>
    </article>
  );
}
