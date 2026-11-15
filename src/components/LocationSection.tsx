import Image from "next/image";
import { clinic } from "@/config/clinic";
import { MapPinIcon, NavigationIcon, PhoneIcon } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function LocationSection() {
  const { directionsUrl } = clinic;
  const { qr, qrIsPlaceholder, photos } = clinic.assets;
  const sign = photos.signboard;

  return (
    <section id="location" aria-labelledby="location-heading" className="section-py bg-brand-aqua">
      <div className="section-container">
        <SectionHeading
          id="location-heading"
          eyebrow="Visit Us"
          title="Find Our Centre"
          description="Conveniently located in Amruthalli, Bangalore. Look for the Sahara Health Cluster signboard above the entrance."
        />

        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:items-stretch">
          {/* Address + QR, grouped */}
          <div className="card flex flex-col p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="icon-tile">
                <MapPinIcon />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal">Address</p>
                <address className="mt-1 text-xl font-bold not-italic leading-snug text-ink sm:text-2xl">
                  {clinic.name}
                  <br />
                  <span className="font-semibold text-ink-muted">{clinic.address.full}</span>
                </address>
              </div>
            </div>

            <hr className="my-7 border-brand-mint" />

            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
              <div className="qr-frame shrink-0">
                {/* Plain <img>: the QR must be shown exactly as supplied — no optimisation, cropping or effects. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qr}
                  alt={
                    qrIsPlaceholder
                      ? "Placeholder for the Sahara Health Cluster location QR code"
                      : "QR code linking to the Sahara Health Cluster location in Amruthalli, Bangalore"
                  }
                  width={208}
                  height={208}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink">Scan for Location</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {qrIsPlaceholder
                    ? "Our location QR code will appear here shortly. Meanwhile, call us and we’ll guide you to the centre."
                    : "Point your phone camera at the code to open our location and get turn-by-turn directions."}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  {directionsUrl ? (
                    <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                      <NavigationIcon />
                      Get Directions
                      <span className="sr-only"> (opens Google Maps in a new tab)</span>
                    </a>
                  ) : (
                    <a href={clinic.phones[0].tel} className="btn btn--primary">
                      <PhoneIcon />
                      Call for Directions
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Real photo of the signboard to help visitors recognise the building */}
          <figure className="card flex flex-col overflow-hidden">
            <div className="relative min-h-[240px] flex-1">
              <Image
                src={sign.src}
                alt={sign.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center gap-3 px-6 py-4 text-sm text-ink-muted sm:px-8">
              <MapPinIcon className="h-5 w-5 shrink-0 text-brand-teal" />
              Look for our signboard — Eye, Dental &amp; General Medical Centre, Amruthalli.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
