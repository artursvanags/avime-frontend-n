import NavMenu from "./navigation-menu"
import { Icons } from "@/components/global/icons"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="w-full mx-auto">
      <div className="container flex items-center h-16">
        <NavMenu />
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <Button variant="default"><Icons.Access className="h-4 w-4 mr-2" /> Access Images</Button>
          <Button asChild variant="ghost" size="icon"><Link href="/account"><Icons.User className="h-4 w-4" /></Link></Button>
          <Button asChild variant="ghost" size="icon"><Link href="/cart"><Icons.MyCart className="h-4 w-4" /></Link></Button>
        </div>
      </div>
    </div>
  )
}
