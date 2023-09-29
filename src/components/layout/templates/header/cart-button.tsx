"use client";
import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Icons } from "@/config/icons";

import { useAccount } from "@/lib/context/account-context";
import { useCart } from "medusa-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CartButton = (props: React.ComponentProps<'div'>) => {
  const { customer, retrievingCustomer } = useAccount();
  const { totalItems } = useCart();
  const [initialTotalItems, setInitialTotalItems] = useState(totalItems);
  const [shouldPulse, setShouldPulse] = useState(false);

  // Set the initialTotalItems when the component mounts
  useEffect(() => {
    setInitialTotalItems(totalItems);
  }, []);

  // Add animate-pulse class when totalItems changes from initial value
  useEffect(() => {
    if (totalItems !== initialTotalItems) {
      // Reset the animation by toggling a CSS class
      setShouldPulse(false);
      setTimeout(() => {
        setShouldPulse(true);
      }, 0);
    }
  }, [totalItems, initialTotalItems]);

  return (
    <div className={cn(props.className)}>
      {!retrievingCustomer && customer && (
        <Button asChild className="relative" variant="ghost" size="icon">
          <Link href="/cart">
            <Icons.MyCart className="h-4 w-4" />
            {totalItems > 0 && (
              <div className="absolute -right-1 -top-1 flex items-center justify-center">
                <div className="relative flex h-4 w-4 items-center justify-center rounded-sm bg-foreground px-1 text-xs text-background">
                  {totalItems}
                </div>
              </div>
            )}
          </Link>
        </Button>
      )}
    </div>
  );
};
