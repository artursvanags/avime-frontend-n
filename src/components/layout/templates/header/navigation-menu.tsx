"use client";
import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckActive } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { NavItem } from "@/types";
import { useAccount } from "@/lib/context/account-context";

export default function Navigation({ menu }: { menu: NavItem[] }) {
  const { loginView, customer, retrievingCustomer } = useAccount();

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
        <Button variant="outline">
          <Icons.Store className="mr-2 h-4 w-4" />
          Store
        </Button>
        <Button variant="outline">
          <Icons.Access className="mr-2 h-4 w-4" />
          Access Photos
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="/account">
            <Icons.User className="h-4 w-4" />
          </Link>
        </Button>
        {!retrievingCustomer && customer && (
          <Button asChild variant="ghost" size="icon">
            <Link href="/cart">
              <Icons.MyCart className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
