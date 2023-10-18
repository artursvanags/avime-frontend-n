import { SiteConfig, NavItem, FeatureItems } from "@/types/index";

export const siteConfig: SiteConfig = {
  name: "AVIME",
  description: "A complete management kit for 3D printing systems.",
  developer: "Stellar Labs SIA",
  author: "Stellar Labs SIA",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  ogImage: "#",
  links: {
    facebook: "#",
  },
  keywords: ["3D Printing", "3D", "Printing"],
};

export const NavigationConfig: NavItem[] = [
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
  {
    title: "Access Photos",
    href: "/access",
  },
];

export const FeatureItemsConfig: FeatureItems[] = [
  {
    src: "/features/1.jpg",
    title: "Location",
    description:
      "We're all in on capturing amazing shots that showcase your school's uniqueness and make you really stand out!",
  },
  {
    src: "/features/3.jpg",
    title: "Smiles",
    description:
      "Let us freeze those timeless smiles in photographs. School days may be fleeting, but photos last a lifetime. We will do our best to make them the best.",
  },
  {
    src: "/features/2.jpg",
    title: "Memories",
    description:
      "From friendships to sports activities and formals, these are the moments we hold closest to our hearts. Allow us to capture these invaluable memories for you.",
  },
];

export const TextConfig = {
  index: {
    SignInError: "A$ Please sign-in to view Pricing",
  }
};

export const ADMIN_EMAIL = [
  "karlis@avime.com.au",
  "arturs.vanags320@gmail.com"
]