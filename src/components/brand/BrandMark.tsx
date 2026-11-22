/**
 * Placeholder brand mark used by the generated PNG icons and the social share
 * image (src/app/icon.tsx, apple-icon.tsx, opengraph-image.tsx via next/og). Mirrors public/favicon.svg — replace together with the
 * real logo asset when it is supplied.
 */
export function BrandMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#009F9A" />
      <rect x="4" y="4" width="24" height="24" rx="6" fill="none" stroke="white" strokeWidth="2.5" />
      <path d="M9 16 C9 11 23 11 23 16 C23 21 9 21 9 16 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 16 C14 14 18 14 18 16 C18 18 14 18 14 16 Z" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  );
}
