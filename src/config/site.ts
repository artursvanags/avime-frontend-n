import { SiteConfig } from "@/types/index"

export const siteConfig: SiteConfig = {
  name: "AVIME",
  description:"A complete management kit for 3D printing systems.",
  developer: "Stellar Labs SIA",
  author: "Stellar Labs SIA",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  ogImage: "#",
  links: {
    facebook: "#",
  },
  keywords: [
    "3D Printing",
    "3D",
    "Printing",
  ],
};