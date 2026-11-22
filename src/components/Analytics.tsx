"use client";

import Script from "next/script";
import { useEffect } from "react";
import { tracking } from "@/config/site";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Loads the Google tag (Google Ads and/or GA4) only when an ID is configured,
 * and reports clicks on phone and directions links as conversions.
 *
 * Phone clicks are detected for every `tel:` link on the page, so new call
 * buttons are tracked automatically. Directions links opt in with
 * `data-track="directions"`.
 */
export function Analytics() {
  const { googleAdsId, ga4Id, callConversionLabel, directionsConversionLabel } =
    tracking;
  const primaryId = googleAdsId || ga4Id;

  useEffect(() => {
    if (!primaryId) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a");
      if (!link || !window.gtag) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        const number = href.replace("tel:", "");
        if (googleAdsId && callConversionLabel) {
          window.gtag("event", "conversion", {
            send_to: `${googleAdsId}/${callConversionLabel}`,
          });
        }
        window.gtag("event", "click_to_call", { phone_number: number });
      } else if (link.dataset.track === "directions") {
        if (googleAdsId && directionsConversionLabel) {
          window.gtag("event", "conversion", {
            send_to: `${googleAdsId}/${directionsConversionLabel}`,
          });
        }
        window.gtag("event", "get_directions");
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [primaryId, googleAdsId, callConversionLabel, directionsConversionLabel]);

  if (!primaryId) return null;

  const configs = [googleAdsId, ga4Id]
    .filter(Boolean)
    .map((id) => `gtag('config', '${id}');`)
    .join("\n");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
${configs}`}
      </Script>
    </>
  );
}
