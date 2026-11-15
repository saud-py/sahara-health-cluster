export function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2v3" />
      <path d="M5 21h14c1 0 2-1 2-2V7l-4-3c-1-0.5-2-1-3-1s-2 0.5-3 1l-4 3v12c0 1 1 2 2 2z" />
    </svg>
  );
}