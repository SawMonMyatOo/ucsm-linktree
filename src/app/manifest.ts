import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name.en,
    short_name: site.shortName.en,
    description: site.shortDescription.en,
    start_url: "/",
    display: "standalone",
    background_color: "#F2F0EA",
    theme_color: "#7A2028",
    icons: [
      {
        src: "/ucsm_logo.svg",
        sizes: "512x512",
        type: "image/svg",
        purpose: "any",
      },
    ],
  };
}
