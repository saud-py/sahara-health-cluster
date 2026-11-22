import type { MetadataRoute } from "next";
import { clinic } from "@/config/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: "Sahara Health",
    description: `${clinic.tagline} — ${clinic.address.full}`,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#009F9A",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
