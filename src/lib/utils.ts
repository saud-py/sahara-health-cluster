type ClassValue = string | number | false | null | undefined | Record<string, unknown> | ClassValue[];

// Lightweight cn helper without the clsx dependency — kept dependency-free.
export function cn(...inputs: ClassValue[]): string {
  return inputs
    .map((input) => {
      if (typeof input === "string") return input;
      if (Array.isArray(input)) return cn(...input);
      if (input && typeof input === "object") {
        return Object.entries(input)
          .filter(([, v]) => Boolean(v))
          .map(([k]) => k)
          .join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}