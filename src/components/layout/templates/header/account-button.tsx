"use client";
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

const menuItems = [
  {
    icon: <Icons.User className="mr-3 h-4 w-4" />,
    text: "View Profile",
    link: "/account",
    shortcut: "⇧⌘P",
  },
  {
    icon: <MyAccount.Billing className="mr-3 h-4 w-4" />,
    text: "Billing",
    link: "/account/addresses",
    shortcut: "⌘B",
  },
  {
    icon: <MyAccount.Orders className="mr-3 h-4 w-4" />,
    text: "Orders",
    link: "/account/orders",
    shortcut: "⌘O",
  },
];

import { useRouter } from "next/navigation";

interface AccountButtonProps extends React.ComponentProps<"div"> {
  name?: string;
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const AccountButton: React.FC<AccountButtonProps> = ({
  name,
  className,
  mobile,
  onClick,
}) => {
  const router = useRouter();
  const { customer, retrievingCustomer, handleLogout } = useAccount();
  const isLoggedIn = !retrievingCustomer && customer;
  const hasName = name !== undefined;
  const isMobile = mobile === true;

  const handleItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className={className}>
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={hasName ? "outline" : "ghost"}
              size={hasName ? "default" : "icon"}
            >
              <Icons.User className={`h-4 w-4${hasName ? " mr-2" : ""}`} />
              {name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={isMobile ? "start" : "end"}
            className="w-48"
          >
            <DropdownMenuLabel className="flex flex-1 items-center align-middle">
              <span>My Account</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div>
              {menuItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => {
                    handleItemClick(item.link);
                    onClick?.();
                  }}
                  className="cursor-pointer"
                >
                  {item.icon}
                  {item.text}

                  <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                handleLogout();
                onClick?.();
              }}
              className="cursor-pointer font-bold text-red-500"
            >
              <MyAccount.Logout className="mr-3 h-4 w-4" />
              Log-out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Button asChild variant="outline">
            <Link href="/account" onClick={onClick}>
              <MyAccount.Login className="mr-2 h-4 w-4" />
              Sign in
            </Link>
          </Button>
        </>
      )}
    </div>
  );
};
