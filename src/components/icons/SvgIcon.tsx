import type { ReactNode } from "react";

export type SvgIconProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  size?: number;
};

export function SvgIcon({ children, className, title, size = 24 }: SvgIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}