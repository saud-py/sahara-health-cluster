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
  ],

  // [PLACEHOLDER] — confirmed phone numbers from the owner may include a second line.
  // Add the second number here once confirmed, e.g. { raw: "9964099117", tel: "tel:+919964099117", label: "Call for appointment" }.
  secondaryPhones: [] as { raw: string; tel: string; label: string }[],

  // [PLACEHOLDER] — not yet confirmed. Leave empty to omit from the UI.
  email: "" as string | null,
  // [PLACEHOLDER] — not yet confirmed. Leave empty to omit from the UI.
  website: "" as string | null,

  // [PLACEHOLDER] — not yet confirmed.
  openingHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
    { days: "Sunday", hours: "[PLACEHOLDER — confirm opening hours]" },
  ],

  // [PLACEHOLDER] — not yet confirmed. Leave empty to omit.
  // e.g. "https://www.google.com/maps/place/?q=place_id:..." once a verified map pin is supplied.
  directionsUrl: "" as string | null,

  // Care values from the flyer — brand messaging only, not clinical claims.
  careValues: [
    "Experienced Specialists",
    "Advanced Technology",
    "Personalised Treatment Plans",
    "Compassionate Care",
  ],

  services: [
    {
      title: "Eye Care",
      tagline: "Clear Vision. Brighter Tomorrow.",
      description:
        "Comprehensive eye care designed to help you see the world clearly and comfortably.",
      icon: "eye",
    },
    {
      title: "Dental Care",
      tagline: "Healthy Smiles. Lasting Confidence.",
      description:
        "Thoughtful dental care focused on your comfort, function, and confidence.",
      icon: "tooth",
    },
    {
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
    // Placeholder QR — replace with the real supplied QR image.
    // Place the real QR at: public/images/location-qr.png (per CLAUDE.md)
    qr: "/images/location-qr.svg",
    // Real clinic photos supplied in the repository.
    photos: {
      exterior: "/images/clinic-exterior.jpg",
      reception: "/images/clinic-reception.jpg",
      examRoomA: "/images/clinic-exam-room.jpg",
      examRoomB: "/images/clinic-exam-room-2.jpg",
    },
  },
};

export type Phone = (typeof clinic.phones)[number];