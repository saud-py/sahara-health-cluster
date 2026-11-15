export function ToothIcon({ className }: { className?: string }) {
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
      <path d="M12 2c-3.9 0-7 3.2-7 7.1 0 1.6 0.6 3.1 1.6 4.3L12 21l6.4-7.7c1-1.3 1.6-2.8 1.6-4.3C19 5.2 15.9 2 12 2z" />
      <path d="M12 15v-1" />
      <path d="M7 12l2 2 2-2" />
    </svg>
  );
}