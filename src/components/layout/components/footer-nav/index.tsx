"use client";

import { siteConfig, FooterNavigationConfig } from "@/config/site";
import ModeToggle from "@/components/global/ThemeToggleButton";
import Link from "next/link";

const FooterNav = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto w-full">
      <div className=" flex items-center border-t border-input bg-primary-dark pb-8 pt-4 text-sm text-primary-dark-foreground">
        <div className="container flex w-full flex-col items-center gap-2 sm:flex-row">
          <div>
            {siteConfig.name} {currentYear}. All rights reserved.
          </div>
          <div>
            {FooterNavigationConfig.map((link, index) => (
              <Link
                key={index}
                className="pl-2 font-medium underline underline-offset-4"
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-shrink-0 flex-row-reverse sm:ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
