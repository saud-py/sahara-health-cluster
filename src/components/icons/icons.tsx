import type { ReactNode } from "react";

type IconProps = { className?: string };

/** Shared line-icon base: 24px grid, 1.8 stroke, round caps. */
function Base({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const EyeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Base>
);

export const ToothIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7.5 3C5 3 3.5 5 3.5 7.6c0 2.4 1 4 1.6 6 .7 2.4 1 7.4 3 7.4 1.6 0 1.7-2.6 2.2-4.6.3-1.2.8-1.9 1.7-1.9s1.4.7 1.7 1.9c.5 2 .6 4.6 2.2 4.6 2 0 2.3-5 3-7.4.6-2 1.6-3.6 1.6-6C20.5 5 19 3 16.5 3c-1.9 0-2.9 1-4.5 1s-2.6-1-4.5-1z" />
  </Base>
);

export const StethoscopeIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 3H4a1 1 0 0 0-1 1v4a5 5 0 0 0 10 0V4a1 1 0 0 0-1-1h-1" />
    <path d="M8 13v1a6 6 0 0 0 12 0v-2" />
    <circle cx="20" cy="10" r="2" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Base>
);

export const MapPinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const ClockIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Base>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);

export const NavigationIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 11 22 2l-9 19-2-8-8-2z" />
  </Base>
);

export const UsersIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
);

export const ChipIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4M7 10.5h2l1.5-3 3 6 1.5-3h2" />
  </Base>
);

export const ClipboardIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="4" width="14" height="18" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h4" />
  </Base>
);

export const HeartIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
);
