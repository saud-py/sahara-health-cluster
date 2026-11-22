/**
 * Central configuration for Sahara Health Cluster.
 *
 * Edit ONLY this file to update contact details and copy.
 * Anything marked [PLACEHOLDER] must be confirmed with the clinic owner
 * before going live — never invent values for these fields.
 */
export const clinic = {
  name: "Sahara Health Cluster",
  tagline: "Eye, Dental & General Medical Centre",
  brandLine: "Your Vision, Our Mission",
  trustLine: "Trusted Care for a Healthier Tomorrow",
  campaignHeadline: "Take Charge. Live in Total Wellness.",
  supportingLine: "Expert Care. Advanced Technology. Healthier You.",
  ctaPrimary: "Book an Appointment",
  ctaSecondary: "Get Directions",

  address: {
    line1: "Amruthalli",
    line2: "Bangalore – 560092",
    full: "Amruthalli, Bangalore – 560092",
    city: "Bangalore",
  },

  // Confirmed phone numbers. tel: links must use the India country code (+91).
  phones: [
    { raw: "9743453077", tel: "tel:+919743453077", label: "Call for appointment" },
    { raw: "9964099117", tel: "tel:+919964099117", label: "Call for appointment" },
    { raw: "9620541210", tel: "tel:+919620541210", label: "Call for appointment" },
  ],

  // Email, website, and opening hours are [PLACEHOLDER] — unconfirmed.
  // Do not present these as verified facts. Add them only after owner confirmation.
  email: null as string | null,
  website: null as string | null,
  // Opening days/hours are not confirmed. Omit from UI until verified.
  openingHours: [] as { days: string; hours: string }[],

  // Verified Google Maps location link supplied by the clinic owner.
  directionsUrl: "https://share.google/p1GJIP2A7oOGMtrrh" as string | null,

  // Care values from the flyer — brand messaging only, not clinical claims.
  careValues: [
    "Experienced Specialists",
    "Advanced Technology",
    "Personalised Treatment Plans",
    "Compassionate Care",
  ],

  services: [
    {
      id: "eyecare",
      title: "Eye Care",
      tagline: "Clear Vision. Brighter Tomorrow.",
      description:
        "Comprehensive eye care designed to help you see the world clearly and comfortably.",
      icon: "eye",
    },
    {
      id: "dental",
      title: "Dental Care",
      tagline: "Healthy Smiles. Lasting Confidence.",
      description:
        "Thoughtful dental care focused on your comfort, function, and confidence.",
      icon: "tooth",
    },
    {
      id: "family-care",
      title: "General Medical Care",
      tagline: "Complete Care. For Every Stage.",
      description:
        "Supportive general medical care for the whole family, at every stage of life.",
      icon: "stethoscope",
    },
  ],

  social: [] as { label: string; href: string }[],

  // Assets
  assets: {
    // Supplied location QR (524×512). Served unmodified — do not crop, tint or re-encode.
    qr: { src: "/images/location-qr.png", width: 524, height: 512 },
    // Supplied brand visual (eye mark with service badges), used in the hero.
    brandVisual: { src: "/images/sahara-brand-mark.png", width: 950, height: 782 },
    // Real clinic photos supplied in the repository.
    photos: {
      exterior: "/images/clinic-exterior.webp",
      reception: "/images/clinic-reception.webp",
      examRoomA: "/images/clinic-exam-room.webp",
      examRoomB: "/images/clinic-exam-room-2.webp",
    },
  },
};

export type Phone = (typeof clinic.phones)[number];