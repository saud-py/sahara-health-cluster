import Link from "next/link";
import { EyeIcon, ToothIcon, StethoscopeIcon } from "./icons";

type IconName = "eye" | "tooth" | "stethoscope";

const ICONS: Record<IconName, React.FC<{ className?: string }>> = {
  eye: EyeIcon,
  tooth: ToothIcon,
  stethoscope: StethoscopeIcon,
};

export type Service = {
  title: string;
  tagline: string;
  description: string;
  icon: string;
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = (ICONS[service.icon as IconName] ?? StethoscopeIcon) as React.FC<{ className?: string }>;
  return (
    <article className="card group flex flex-col gap-5 p-7 transition-transform hover:-translate-y-1">
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-brand-deep">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-display text-xl font-bold text-ink">{service.title}</h3>
      <p className="text-base font-medium text-brand-teal">{service.tagline}</p>
      <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
      <div className="mt-auto pt-2">
        <Link
          href="#contact"
          className="inline-flex items-center text-sm font-semibold text-brand-teal underline-offset-4 hover:underline"
        >
          Book an appointment
          <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </article>
  );
}