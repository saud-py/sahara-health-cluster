import type { Metadata } from "next";
import { clinic } from "@/config/clinic";
import "./globals.css";

const siteUrl = "https://saharahealthcluster.in"; // [PLACEHOLDER — confirm domain]

export const metadata: Metadata = {
  title: "Sahara Health Cluster — Eye, Dental & General Medical Centre",
  description:
    "Sahara Health Cluster in Amruthalli, Bangalore — Eye, Dental and General Medical Centre. Trusted care, advanced technology. Book an appointment today.",
  keywords: [
    "Sahara Health Cluster",
    "eye care",
    "dental care",
    "general medical centre",
    "Amruthalli",
    "Bangalore",
    "clinic",
  ],
  authors: [{ name: "Sahara Health Cluster" }],
  creator: "Sahara Health Cluster",
  publisher: "Sahara Health Cluster",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sahara Health Cluster — Eye, Dental & General Medical Centre",
    description:
      "Sahara Health Cluster in Amruthalli, Bangalore — Eye, Dental and General Medical Centre. Trusted care, advanced technology. Book an appointment today.",
    url: siteUrl,
    siteName: "Sahara Health Cluster",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Sahara Health Cluster — Eye, Dental & General Medical Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahara Health Cluster — Eye, Dental & General Medical Centre",
    description:
      "Sahara Health Cluster in Amruthalli, Bangalore — Eye, Dental and General Medical Centre. Trusted care, advanced technology. Book an appointment today.",
    images: ["/og-cover.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: `${clinic.name} — ${clinic.tagline} in ${clinic.address.full}.`,
    url: siteUrl,
    telephone: clinic.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      postalCode: "560092",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
