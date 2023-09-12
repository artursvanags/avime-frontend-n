import NavMenu from "./navigation-menu";
import { Icons } from "@/config/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="mx-auto w-full">
      <div className="container flex h-16 items-center">
        <NavMenu />
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
    </div>
  );
}
