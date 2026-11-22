/**
 * Deployment, SEO and ad-tracking settings.
 *
 * All values come from environment variables so they can be set in
 * Netlify → Site configuration → Environment variables without code changes.
 * See `.env.example` for the full list.
 */

function normaliseUrl(url: string) {
  return url.replace(/\/+$/, "");
}

/**
 * Canonical site URL.
 * 1. NEXT_PUBLIC_SITE_URL — set this once a custom domain is confirmed.
 * 2. URL — injected automatically by Netlify at build time (primary site URL).
 * 3. Local fallback for development.
 */
export const siteUrl = normaliseUrl(
  process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000",
);

/**
 * Only the Netlify production context should be indexed. Deploy previews and
 * branch deploys are served with noindex so they never compete with the live
 * site in Google results. Outside Netlify (CONTEXT unset) indexing is allowed.
 */
export const isIndexable =
  !process.env.CONTEXT || process.env.CONTEXT === "production";

export const tracking = {
  /** Google Ads tag ID, e.g. "AW-123456789". Tag is not loaded when empty. */
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  /** Conversion label for the "Phone call click" conversion action. */
  callConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL || "",
  /** Conversion label for the "Get directions click" conversion action (optional). */
  directionsConversionLabel:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_DIRECTIONS_LABEL || "",
  /** Google Analytics 4 measurement ID, e.g. "G-XXXXXXX" (optional). */
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  /** Google Search Console HTML-tag verification token (optional). */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export const seo = {
  title:
    "Sahara Health Cluster | Eye, Dental & General Clinic in Amruthalli, Bangalore",
  shortTitle: "Sahara Health Cluster",
  description:
    "Eye care, dental care and general medical care under one roof at Sahara Health Cluster, Amruthalli, Bangalore – 560092. Experienced specialists and personalised care — call to book your appointment.",
};
