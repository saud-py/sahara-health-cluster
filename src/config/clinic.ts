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

  // Map/directions URL — [PLACEHOLDER] requiring verified map pin from owner.
  // e.g. "https://www.google.com/maps/place/?q=place_id:..." once supplied.
  directionsUrl: null as string | null,

  // Care values from the flyer — brand messaging only, not clinical claims.
  careValues: [
    {
      title: "Experienced Specialists",
      description: "A dedicated team committed to your wellbeing at every visit.",
      icon: "users",
    },
    {
      title: "Advanced Technology",
      description: "Modern equipment to support careful, accurate assessment.",
      icon: "chip",
    },
    {
      title: "Personalised Treatment Plans",
      description: "Care shaped around your needs, not a one-size-fits-all approach.",
      icon: "clipboard",
    },
    {
      title: "Compassionate Care",
      description: "Kind, respectful support from your first call to follow-up.",
      icon: "heart",
    },
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
    // Placeholder QR — replace with the real supplied QR image.
    // Place the real QR at: public/images/location-qr.png (per CLAUDE.md)
    // Currently using the supplied SVG asset: public/images/location-qr.svg
    qr: "/images/location-qr.svg",
    // Set to false once the real, scanner-tested QR image replaces the placeholder.
    qrIsPlaceholder: true,
    // Real clinic photos supplied in the repository.
    // Note: some file names do not match their content; the keys below
    // describe what each photo actually shows.
    photos: {
      signboard: { src: "/images/clinic-exterior.webp", width: 1080, height: 608, alt: "Sahara Health Cluster signboard above the clinic entrance in Amruthalli" },
      streetView: { src: "/images/clinic-overflow.webp", width: 765, height: 1020, alt: "Street view of the Sahara Health Cluster building in Amruthalli, Bangalore" },
      reception: { src: "/images/clinic-exam-room.webp", width: 1360, height: 1020, alt: "Reception desk and consultation rooms at Sahara Health Cluster" },
      eyeRoom: { src: "/images/clinic-exam-room-2.webp", width: 1360, height: 1020, alt: "Eye examination room with diagnostic equipment at Sahara Health Cluster" },
      eyeChair: { src: "/images/clinic-reception.webp", width: 765, height: 1020, alt: "Eye examination chair and slit lamp at Sahara Health Cluster" },
      eyeRoomNarrow: { src: "/images/clinic-interior.webp", width: 765, height: 1020, alt: "Examination room at Sahara Health Cluster" },
    },
  },
};

export type Phone = (typeof clinic.phones)[number];