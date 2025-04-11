import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Rehber Yazılım - Web ve Yazılım Çözümleri`,
    short_name: `Rehber Yazılım`,
    description: `Rehber Yazılım olarak modern web ve yazılım çözümleri sunuyoruz`,
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#059669",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
} 