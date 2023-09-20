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
} from "lucide-react";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DefaultLogo = () => {
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
        className="w-32 h-32"
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
};

export const ThemeIcons = {
  Sun: Sun,
  Moon: Moon,
  System: Laptop,
};
