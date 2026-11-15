import { clinic } from "@/config/clinic";
import { NavigationIcon, PhoneIcon } from "./icons";

/** Compact sticky bottom bar shown on small screens only. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-mint bg-white/95 px-4 pt-2.5 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href={clinic.phones[0].tel} className="btn btn--primary btn--sm">
          <PhoneIcon />
          Call
        </a>
        <a href="#location" className="btn btn--outline btn--sm">
          <NavigationIcon />
          Directions
        </a>
      </div>
    </nav>
  );
}
