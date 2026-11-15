import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

/** Consistent eyebrow + heading + intro block used by every section. */
export function SectionHeading({ eyebrow, title, description, align = "center", id, className }: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id} className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
