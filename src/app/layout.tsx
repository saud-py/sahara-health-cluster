import type { Metadata, Viewport } from "next";
import { clinic } from "@/config/clinic";
import { isIndexable, seo, siteUrl, tracking } from "@/config/site";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${seo.shortTitle}`,
  },
  description: seo.description,
  applicationName: clinic.name,
  keywords: [
    "Sahara Health Cluster",
    "clinic in Amruthalli",
    "eye clinic Amruthalli",
    "dental clinic Amruthalli",
    "general physician Amruthalli",
    "eye care Bangalore",
    "dental care Bangalore",
    "medical centre Bangalore 560092",
  ],
  authors: [{ name: clinic.name }],
  creator: clinic.name,
  publisher: clinic.name,
  category: "health",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: false },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/",
    siteName: clinic.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false },
  verification: tracking.googleSiteVerification
    ? { google: tracking.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#009F9A",
};

function structuredData() {
  const telephones = clinic.phones.map((p) => `+91${p.raw}`);
  const clinicNode = {
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    slogan: clinic.brandLine,
    description: `${clinic.name} — ${clinic.tagline} in ${clinic.address.full}.`,
    url: `${siteUrl}/`,
    logo: `${siteUrl}/icon`,
    image: [
      `${siteUrl}/images/clinic-exterior.webp`,
      `${siteUrl}/images/clinic-reception.webp`,
      `${siteUrl}/images/clinic-interior.webp`,
    ],
    telephone: telephones[0],
    contactPoint: telephones.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "appointments",
      areaServed: "IN",
      availableLanguage: ["en"],
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      addressRegion: "Karnataka",
      postalCode: "560092",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Bangalore" },
    medicalSpecialty: ["Optometric", "Dentistry", "PrimaryCare"],
    availableService: clinic.services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.title,
      description: s.description,
    })),
    isAcceptingNewPatients: true,
    ...(clinic.directionsUrl ? { hasMap: clinic.directionsUrl } : {}),
    ...(clinic.email ? { email: clinic.email } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      clinicNode,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: clinic.name,
        inLanguage: "en-IN",
        publisher: { "@id": `${siteUrl}/#clinic` },
      },
    ],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
