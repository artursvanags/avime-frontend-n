export type SiteConfig = {
  name: string;
  description: string;
  developer: string;
  author: string;
  url: string;
  ogImage: string;
  links: {
    facebook: string;
  };
  keywords: string[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type FeatureItems = {
  src: string;
  title?: string;
  description?: string;
};