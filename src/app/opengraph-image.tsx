import { ImageResponse } from "next/og";
import { clinic } from "@/config/clinic";
import { BrandMark } from "./brand-mark";

// PNG share image for WhatsApp, Facebook, LinkedIn, X and Google Discover.
// (SVG share images are ignored by most platforms.)
export const alt = `${clinic.name} — ${clinic.tagline}, ${clinic.address.full}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #006B68 0%, #009F9A 70%, #08B7B0 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <BrandMark size={96} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: 2 }}>
              SAHARA HEALTH CLUSTER
            </div>
            <div style={{ fontSize: 26, opacity: 0.85 }}>{clinic.brandLine}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
            {clinic.campaignHeadline}
          </div>
          <div style={{ fontSize: 34, opacity: 0.92 }}>
            Eye Care · Dental Care · General Medical Care
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <div>{clinic.address.full}</div>
          <div style={{ fontWeight: 700 }}>
            {clinic.phones.map((p) => p.raw).join("  ·  ")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
