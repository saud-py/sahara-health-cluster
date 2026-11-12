import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Sahara Health Cluster logo.
 *
 * The supplied logo asset was not present in the repository. This is a clearly
 * named PLACEHOLDER component rendering the brand mark exactly as described in
 * CLAUDE.md: a white abstract eye/spiral mark with a small central dot, placed
 * inside a rounded square.
 *
 * TODO: Replace the inner <svg> with the supplied logo asset.
 *   - Place the real logo file at: public/images/sahara-logo.png (or .svg)
 *   - Update this component to render <img src="/images/sahara-logo.png" ... />
 *   - Do NOT invent a different brand mark.
 */

type LogoProps = {
  className?: string;
  /** When true, renders a light-colour variant for use on teal backgrounds. */
  light?: boolean;
  showWordmark?: boolean;
};

export function Logo({ className, light = false, showWordmark = true }: LogoProps) {
  const mark = (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
        light ? "bg-white/90" : "bg-brand-teal",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 48 48"
        width="34"
        height="34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rounded square frame */}
        <rect x="4" y="4" width="40" height="40" rx="12" stroke="white" strokeWidth="3" />
        {/* Abstract eye / spiral mark with central dot */}
        <path
          d="M14 24 C14 18 34 18 34 24 C34 30 14 30 14 24 Z"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 24 C20 21 28 21 28 24 C28 27 20 27 20 24 Z"
          stroke="white"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2.6" fill="white" />
      </svg>
    </span>
  );

  if (!showWordmark) {
    return mark;
  }

  return (
    <Link href="/" className="inline-flex items-center gap-3">
      {mark}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            light ? "text-white" : "text-ink"
          )}
        >
          SAHARA HEALTH CLUSTER
        </span>
        <span
          className={cn(
            "mt-0.5 text-[11px] font-medium tracking-wide uppercase",
            light ? "text-white/80" : "text-brand-teal"
          )}
        >
          Your Vision, Our Mission
        </span>
      </span>
    </Link>
  );
}