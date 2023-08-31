"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { siteConfig } from "@/config/site"

import { Button } from "@/components/ui/button"

type LinkItem = {
  href: string;
  title: string;
  icon?: string;
}

const links: LinkItem[] = [
  { href: "/store", title: "Store", icon: "" },
  { href: "/about-us", title: "About Us", icon: "" },
  { href: "/contacts", title: "Contacts", icon: "" },
];

const CheckActive = ({ href }: { href: string }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return isActive;
}

const NavMenu = () => {
  return (
    <div className="mr-4 hidden md:flex">
      
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center space-x-3 text-sm font-medium">
        {links.map((l, index) => (
          <Button key={index} asChild variant={CheckActive({ href: l.href }) ? "secondary" : "ghost"}>
            <Link href={l.href}>{l.title}</Link>
          </Button>

        ))}
      </nav>
    </div>   
  );  
}

export default NavMenu;