import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons, MyAccount } from "@/config/icons";
import { useAccount } from "@/lib/context/account-context";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

export const AccountButton = () => {
  const { customer, retrievingCustomer, checkSession, handleLogout } =
    useAccount();

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const dropdownContent = useMemo(() => {
    if (!retrievingCustomer && customer) {
      return (
        <>
          <DropdownMenuLabel className="flex flex-1 items-center align-middle">
            <span>My Account</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/account"
              className="flex flex-1 items-center align-middle"
            >
              <Icons.User className="mr-3 h-4 w-4" /> View Profile
            </Link>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/account/addresses"
              className="flex flex-1 items-center align-middle"
            >
              <MyAccount.Billing className="mr-3 h-4 w-4" />
              Billing
            </Link>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/account/orders"
              className="flex flex-1 items-center align-middle"
            >
              <MyAccount.Orders className="mr-3 h-4 w-4" />
              Orders
            </Link>
            <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="font-bold text-red-500 cursor-pointer"
          >
            <MyAccount.Logout className="mr-3 h-4 w-4" />
            Log-out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </>
      );
    }
    return (
      <>
        <Button asChild variant="outline">
          <Link href="/account">
            <MyAccount.Login className="mr-2 h-4 w-4" />
            Sign in
          </Link>
        </Button>
      </>
    );
  }, [retrievingCustomer, customer, handleLogout]);

  return (
    <>
      {!retrievingCustomer && customer ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon">
              <Icons.User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="right-0 w-48">
            {dropdownContent}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>{dropdownContent}</>
      )}
    </>
  );
};
