# CLAUDE.md — Sahara Health Cluster Website

## Project goal

Design and build a polished, trustworthy, conversion-focused website for **Sahara Health Cluster**, a healthcare centre in Amruthalli, Bengaluru.

The site should make visitors feel confident about the clinic and encourage them to **call for an appointment, visit the centre, or scan the location QR code for directions**.

Do not make this look like a generic hospital template. Create a distinctive, premium local-clinic identity inspired by the supplied Sahara Health Cluster flyer.

## Brand and visual direction

### Brand identity
- Brand name: **SAHARA HEALTH CLUSTER**
- Brand line: **Your Vision, Our Mission**
- Main campaign headline: **Take Charge. Live in Total Wellness.**
- Supporting line: **Expert Care. Advanced Technology. Healthier You.**
- Trust message: **Trusted Care for a Healthier Tomorrow**
- Primary call to action: **Book an Appointment**
- Secondary call to action: **Get Directions**

### Colour palette
Use the supplied teal/turquoise colour as the primary brand colour, replacing the red/maroon palette from the earlier flyer.

Suggested starting tokens (adjust only if needed to harmonise the design):
- Deep teal: `#006B68`
- Primary teal: `#009F9A`
- Bright turquoise: `#08B7B0`
- Pale mint: `#E5F7F5`
- Soft aqua: `#F3FBFA`
- White: `#FFFFFF`
- Main text: `#183638`
- Muted text: `#527174`

Use teal gradients sparingly for prominent buttons, decorative curves, and hero accents. Maintain strong contrast and generous white space. Avoid excessive glow, heavy shadows, or too many competing colours.

### Logo
The logo is a white abstract eye/spiral mark with a small central dot, placed inside a rounded square. Use the supplied logo asset if available. Do not redraw or reinterpret it unnecessarily.

If the logo file is not in the project, create a clearly named placeholder component and document where the real asset should be added. Do not invent a different brand mark.

## Confirmed clinic information

Use these details consistently:
- **Name:** Sahara Health Cluster
- **Clinic type:** Eye, Dental and General Medical Centre
- **Address:** Amruthalli, Bangalore – 560092
- **Appointment phone numbers:**
  - `9964099117`
  - `9620541210`

Phone links must use `tel:+919964099117` and `tel:+919620541210` (India country code).

### Information that must remain configurable / verified
The flyer artwork has included example contact details that may not be confirmed. Do not present these as verified facts without checking with the project owner:
- Email address
- Website/domain
- Opening hours
- Sunday availability
- Exact list of treatments, procedures, doctors, qualifications, equipment, insurance partners, emergency services, and claims about clinical outcomes

Use clearly labelled placeholders in a central configuration file or omit unconfirmed details. Never invent doctors, testimonials, ratings, certifications, prices, insurance coverage, or medical claims.

## Services to feature

The clinic is presented as providing these three broad service categories:

1. **Eye Care** — Clear Vision. Brighter Tomorrow.
2. **Dental Care** — Healthy Smiles. Lasting Confidence.
3. **General Medical Care** — Complete Care. For Every Stage.

The flyer also communicates these care values:
- Experienced specialists
- Advanced technology
- Personalised treatment plans
- Compassionate care

Treat these as brand messaging, not as proof of a specific qualification or facility. Do not add detailed service subcategories until confirmed by the clinic.

## QR code and directions

A real location QR code was supplied by the project owner.

- Use the supplied QR image asset; **do not generate, approximate, redraw, or replace it with a decorative QR code**.
- Suggested asset path: `public/images/location-qr.png`.
- If the supplied image is not present in the repository, add a placeholder with a clear TODO and explain exactly where the owner should place the QR image.
- Display it near the address in a dedicated **Scan for Location** area.
- Keep a clean white quiet-zone around the QR code and preserve its aspect ratio. Do not crop, tint, overlay text on, or add effects over the QR code.
- Make it large enough to scan comfortably on a phone screen and in print.
- Add a nearby **Get Directions** button. Use a Google Maps URL only after the clinic's exact map pin or verified destination URL is supplied. Do not guess the map pin.

## Website experience and recommended structure

Build a responsive, mobile-first website with these sections:

### 1. Header
- Logo and Sahara Health Cluster wordmark.
- Navigation: Home, About, Services, Contact.
- Prominent **Call Now** or **Book an Appointment** action.
- Sticky header on scroll if it remains unobtrusive.
- Mobile navigation must be accessible and easy to use.

### 2. Hero section
Use a visually striking, clean hero inspired by the flyer:
- Main headline: **Take Charge. Live in Total Wellness.**
- Supporting text: **Expert Care. Advanced Technology. Healthier You.**
- Short descriptor: **Eye, Dental and General Medical Centre**
- Primary CTA: **Call for an Appointment**
- Secondary CTA: **Get Directions**
- Use an elegant eye/vision-inspired graphic or abstract brand motif on the right. No human photography is required. Do not use AI-generated doctors or imply a pictured person works at the clinic.
- The hero should quickly communicate what the clinic offers and how to contact it.

### 3. Services
Create three attractive service cards for Eye Care, Dental Care, and General Medical Care.
- Use simple, consistent line icons.
- Keep descriptions concise and reassuring.
- Link each card to a service detail section or page.
- Do not claim specific procedures or treatments unless supplied and verified.

### 4. Why choose Sahara
Present the four flyer themes:
- Experienced Specialists
- Advanced Technology
- Personalised Treatment Plans
- Compassionate Care

Use restrained iconography and short copy. Avoid unsupported superlatives such as “best”, “No. 1”, or “leading”.

### 5. Brand / trust section
Use:
- **Trusted Care for a Healthier Tomorrow**
- **Your Vision, Our Mission**
- A warm, human, reassuring tone.
Do not create fabricated patient testimonials, star ratings, awards, or medical credentials.

### 6. Appointment CTA
A strong, high-contrast teal section:
- Heading: **Your Health, Our Priority**
- Text inviting visitors to call the clinic.
- Both phone numbers displayed clearly and clickable.
- CTA: **Call Now**

### 7. Location section
- Address: **Amruthalli, Bangalore – 560092**
- Supplied location QR code with label **Scan for Location**.
- **Get Directions** button, once a verified map destination is configured.
- Keep address and QR code visually grouped.

### 8. Footer
Include only verified contact information:
- Sahara Health Cluster
- Address
- Both phone numbers
- Email, website, and opening hours only after confirmation
- Quick links and a simple copyright line

## Conversion and interaction requirements

The website is an advertisement and a practical clinic contact point. Make the next action obvious:
- Keep a visible appointment CTA in the header.
- Use clickable `tel:` links for both phone numbers.
- On mobile, consider a compact sticky bottom action bar with **Call** and **Directions**.
- Repeat the phone numbers in the contact section and footer.
- Make the QR code easy to find near the address.
- Use clear button labels and avoid dead-end buttons.
- If a booking form is implemented, keep it short and validate fields accessibly. Do not claim an appointment is confirmed unless a real booking backend exists.

## Design and accessibility requirements

- Mobile-first and fully responsive, including small phones, tablets, laptops, and large screens.
- Premium, modern, welcoming, uncluttered visual style.
- Strong typography hierarchy: bold headline, readable body copy, clear section headings.
- Use subtle curved shapes and wave accents inspired by the flyer, without making the page visually busy.
- Use consistent spacing, border radii, icon stroke weights, and button styles.
- Meet WCAG AA colour contrast where practical.
- Keyboard-accessible navigation, visible focus states, semantic HTML, accessible form labels, and meaningful image alt text.
- Respect reduced-motion preferences.
- Optimise images and avoid unnecessary animation.
- Add descriptive page title, meta description, Open Graph metadata, favicon, and LocalBusiness/MedicalClinic structured data only with verified facts.
- Do not add fake map embeds, fake social links, or broken links.

## Technical implementation

First inspect the existing repository and follow its current framework, conventions, and package manager. Do not replace a working stack without a clear reason.

If starting from an empty repository:
- Prefer Next.js with TypeScript and the App Router.
- Use a maintainable component structure.
- Use Tailwind CSS if already installed or if it is the simplest fit.
- Keep content and contact details in one central configuration file so the owner can update them easily.
- Avoid unnecessary dependencies.
- Ensure the project runs locally and provide the exact commands to install dependencies and start the development server.

Suggested components:
- `SiteHeader`
- `HeroSection`
- `ServiceCard`
- `ServicesSection`
- `WhyChooseUs`
- `AppointmentCTA`
- `LocationSection`
- `ContactDetails`
- `SiteFooter`
- `MobileActionBar`

Suggested central config:
- `src/config/clinic.ts` (or the equivalent location for the existing stack)

## Content accuracy rules

- Preserve the exact clinic name, address, and phone numbers listed in this file.
- Do not silently change “Bangalore” to another city name in visible copy.
- Do not invent an email address, website, opening hours, doctor names, qualifications, patient reviews, or services.
- If a key detail is missing, use a clearly marked placeholder and list it in the final handoff.
- Do not claim that the QR code works unless the supplied QR asset is present and has been tested with a QR scanner.

## Definition of done

Before finishing:
1. Build all agreed sections and make the design responsive.
2. Check all navigation links, buttons, and telephone links.
3. Confirm both phone numbers appear correctly:
   - `9964099117`
   - `9620541210`
4. Confirm the address appears correctly:
   - `Amruthalli, Bangalore – 560092`
5. Confirm the supplied QR image is used without modification and remains scannable.
6. Check for overflow, broken images, console errors, and inaccessible controls.
7. Run the available lint, type-check, and build commands.
8. Provide a concise summary of files changed, how to run the site, and all remaining placeholders that require owner confirmation.

## Working instructions for Claude Code

- Start by inspecting the repository and available image assets.
- If the flyer, logo, or QR code assets are present, reuse them appropriately. Do not assume an asset exists if it is not in the repository.
- Implement the complete website, not just a static mockup or a design description.
- Make sensible design decisions without repeatedly asking for approval.
- Ask only when a missing fact blocks implementation or when a real-world action requires confirmation.
- Never fabricate clinic information to make the page look complete.
