"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckActive } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { NavItem } from "@/types";

export default function Navigation({ menu }: { menu: NavItem[] }) {
  return (
    <div className="flex h-16 w-full items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      <nav className="flex items-center space-x-3 text-sm font-medium">
        {menu.map((l, index) => (
          <Button
            key={index}
            asChild
            variant={CheckActive({ href: l.href }) ? "secondary" : "ghost"}
          >
            <Link href={l.href}>{l.title}</Link>
          </Button>
        ))}
      </nav>

      <div className="flex flex-1 items-center justify-end space-x-2">
        <Button variant="default">
          <Icons.Store className="mr-2 h-4 w-4" />
          Store
        </Button>
        <Button variant="default">
          <Icons.Access className="mr-2 h-4 w-4" />
          Access Photos
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="/account">
            <Icons.User className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="/cart">
            <Icons.MyCart className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
