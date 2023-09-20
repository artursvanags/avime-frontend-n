"use client";

import { siteConfig } from "@/config/site";
import ModeToggle from "@/components/global/ThemeToggleButton";

const FooterNav = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mx-auto w-full">
      <div className=" flex items-center border-t border-input bg-primary-dark pb-8 pt-4 text-sm text-primary-dark-foreground">
        <div className="container flex w-full items-center justify-between">
          <div className="flex-shrink-0 text-center">
            {siteConfig.name} {currentYear}. All rights reserved.
          </div>
          <div className="flex flex-shrink-0 flex-row-reverse">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
