'use client'
import Navigation from "./navigation-menu";
import MobileNavigation from "./mobile-menu";
import { NavigationConfig as nav } from "@/config/site";


export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 lg:static">
      <div className="lg:hidden">
        <MobileNavigation menu={nav} />
      </div>
      <div className="container hidden lg:block">
        <Navigation menu={nav} />
      </div>
    </header>
  );
}
