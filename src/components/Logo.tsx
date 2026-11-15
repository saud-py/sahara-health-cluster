import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Sahara Health Cluster logo.
 *
 * PLACEHOLDER: the supplied logo file is not in the repository. This renders the
 * mark as described in the brand brief — a white abstract eye/spiral with a small
 * central dot inside a rounded square.
 *
 * TODO: Replace <LogoMark /> with the supplied asset.
 *   - Place the real logo at: public/images/sahara-logo.svg (or .png)
 *   - Render it with <img src="/images/sahara-logo.svg" alt="" /> inside LogoMark.
 *   - Do NOT invent a different brand mark.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-brand-teal to-brand-deep",
        className
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
        <path
          d="M8 24c4-7 9.5-10.5 16-10.5S36 17 40 24c-4 7-9.5 10.5-16 10.5S12 31 8 24z"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M24 17.5a6.5 6.5 0 1 1-6.5 6.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2.6" fill="white" />
      </svg>
    </span>
  );
}

type LogoProps = {
  /** Light wordmark for use on dark/teal backgrounds. */
  light?: boolean;
  className?: string;
};

export function Logo({ light = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex min-w-0 items-center gap-3 rounded-xl", className)}
      aria-label="Sahara Health Cluster — home"
    >
      <LogoMark />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate text-[15px] font-extrabold tracking-[0.04em] sm:text-base",
            light ? "text-white" : "text-ink"
          )}
        >
          SAHARA HEALTH CLUSTER
        </span>
        <span
          className={cn(
            "mt-1 truncate text-[11px] font-semibold uppercase tracking-[0.12em]",
            light ? "text-brand-mint/80" : "text-brand-teal"
          )}
        >
          Your Vision, Our Mission
        </span>
      </span>
    </Link>
  );
}
