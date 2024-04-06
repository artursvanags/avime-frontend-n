"use client";
import {
  ChevronsUpDown,
  Sun,
  Moon,
  Laptop,
  ShoppingCart,
  User,
  Lock,
  MenuIcon,
  Store,
  Award,
  Rocket,
  Wallet,
  Loader2,
  Layers,
  LogInIcon,
  LogOutIcon,
  School,
  Package,
  CreditCard,
  Plus,
  Minus,
  Phone,
  Mail,
} from "lucide-react";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const DefaultLogo = (props: React.ComponentProps<"img">) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  let logoSrc;
  switch (resolvedTheme) {
    case "dark":
      logoSrc = "/avime-logo-white.svg";
      break;
    case "light":
      logoSrc = "/avime-logo-black.svg";
      break;
    default:
      logoSrc =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Image
        src={logoSrc}
        alt="Logo"
        width={100}
        height={100}
        className={cn("w-42 h-42", props.className)}
      />
    </>
  );
};

export const Icons = {
  logo: DefaultLogo,
  HamburgerMenu: MenuIcon,
  User: User,
  Access: Lock,
  Store: Store,
  MyCart: ShoppingCart,
  Layers: Layers,
};

export const FeatureIcons = {
  award: Award,
  rocket: Rocket,
  wallet: Wallet,
};

export const ThemeIcons = {
  Sun: Sun,
  Moon: Moon,
  System: Laptop,
};

export const ContactsIcons = {
  Phone: Phone,
  Email: Mail,
};

export const MyAccount = {
  Account: School,
  Billing: CreditCard,
  Orders: Package,
  Login: LogInIcon,
  Logout: LogOutIcon,
};

export const DropdownQuantityIcons = {
  Plus: Plus,
  Minus: Minus,
};
export const Spinner = Loader2;
