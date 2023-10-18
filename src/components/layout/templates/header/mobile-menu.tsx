"use client";

import { useRef } from "react";
import Link from "next/link";
import { CheckActive, cn } from "@/lib/utils";
import { Icons } from "@/config/icons";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ModeToggle from "@/components/global/ThemeToggleButton";
import { NavItem } from "@/types";
import { CartButton } from "./cart-button";
import { AccountButton } from "./account-button";

export default function MobileNavigation({ menu }: { menu: NavItem[] }) {
  const sheetCloseRef = useRef<HTMLButtonElement | null>(null);

  const handleSheetClose = () => {
    if (sheetCloseRef.current) {
      sheetCloseRef.current.click();
    }
  };
  const Content = () => {
    return (
      <>
        <div className="flex">
          <AccountButton name="My Account" mobile onClick={handleSheetClose} />
          <CartButton className="ml-auto" mobile onClick={handleSheetClose} />
        </div>

        <p className="border-b pb-2 font-heading text-4xl lg:text-5xl">
          Main Menu
        </p>

        <div className="flex space-x-2">
          <Button className="w-full justify-start" asChild variant="outline">
            <Link href="/store" onClick={handleSheetClose}>
              <Icons.Store className="mr-2 h-4 w-4" />
              Store
            </Link>
          </Button>
        </div>

        <nav className=" space-y-2">
          {menu.map((l, index) => (
            <Button
              asChild
              key={index}
              size="lg"
              className={cn("w-full justify-start")}
              variant={CheckActive({ href: l.href }) ? "secondary" : "ghost"}
              onClick={handleSheetClose}
            >
              <Link href={l.href}>{l.title}</Link>
            </Button>
          ))}
        </nav>
      </>
    );
  };
  return (
    <div className="flex border-b bg-background px-4 py-4">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Icons.HamburgerMenu className="h-12 w-12" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent className="flex w-[80vw] flex-col px-4 py-4" side="left">
          <Content />
          <SheetClose ref={sheetCloseRef} />
          <div className="mt-auto border-t pt-4">
            <div className="flex flex-1 items-center justify-between">
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="ml-auto flex items-center space-x-2 pr-4">
        <Link href="/" className="flex items-center space-x-2 overflow-visible">
          <Icons.logo className="h-16 w-16" />
        </Link>
      </div>
    </div>
  );
}
