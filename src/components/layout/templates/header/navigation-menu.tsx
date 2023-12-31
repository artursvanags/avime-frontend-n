"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckActive } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { NavItem } from "@/types";
import { CartButton } from "./cart-button";
import { AccountButton } from "./account-button";

export default function Navigation({ menu }: { menu: NavItem[] }) {
  return (
    <div className="flex h-32 w-full items-center justify-center">
      <nav className="mr-auto flex flex-1 space-x-3 text-sm font-medium">
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

      <Link
        href="/"
        className="mb-4 flex items-center space-x-2 overflow-visible"
      >
        <Icons.logo />
      </Link>

      <div className="ml-auto flex flex-1 justify-end space-x-2">
        
        <Button asChild variant="outline">
          <Link href="/store">
            <Icons.Store className="mr-2 h-4 w-4" />
            Order Photos
          </Link>
        </Button>
        <AccountButton />
        <CartButton />
      </div>
    </div>
  );
}
