import { SiteConfig, NavItem, FeatureItems } from "@/types/index";

export const siteConfig: SiteConfig = {
  name: "AVIME",
  description:
    "Australia's best school photography company. Revolutionising how you view school photos. Making Australian schools great again, one photo at a time.",
  developer: "AVIME PTY LTD",
  author: "AVIME PTY LTD",
  url: process.env.NEXT_PUBLIC_SITE_URL as string,
  ogImage: "/features/2.jpg",
  links: {
    facebook: "#",
  },
  keywords: [
    "AVIME",
    "Australia",
    "School Photography",
    "Best School Photography",
    "Australian Schools",
    "School Photos",
    "Quality School Pictures",
    "School Memories",
    "School",
    "Photography",
    "Photographer",
    "Book",
    "Bookings",
    "Order photos",
    "Photo printing",
    "Photos",
    "Mediahouse",
    "Memories",
    "Gold Coast",
    "Queensland",
  ],
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
  },
};

export const ADMIN_EMAIL = [
  "karlis@avime.com.au",
  "arturs.vanags320@gmail.com",
];
