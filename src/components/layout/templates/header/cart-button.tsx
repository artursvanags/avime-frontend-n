import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/config/icons";
import { useAccount } from "@/lib/context/account-context";
import { useCart } from "medusa-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CartDropdown from "./cart-dropdown";
import { useState } from "react";

interface CartButtonProps extends React.ComponentProps<"div"> {
  className?: string;
  mobile?: boolean;
  onClick?: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({
  className,
  mobile,
  onClick,
}) => {
  const router = useRouter();
  const { customer, retrievingCustomer } = useAccount();
  const { cart, totalItems } = useCart();
  const isMobile = mobile === true;

  const handleItemClick = (link: string) => {
    router.push(link);
  };

    // Create state to manage the open/closed state of the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle opening/closing the dropdown
    const toggleDropdown = () => {
      setIsDropdownOpen(false);
    };

  return (
    <div className={cn(className)}>
      {!retrievingCustomer && customer && (
        <>
          {isMobile ? (
            <Button
              onClick={() => {
                handleItemClick("/cart");
                onClick?.();
              }}
              className="relative"
              variant="ghost"
              size="icon"
            >
              <Icons.MyCart className="h-4 w-4" />
              {totalItems > 0 && (
                <div className="absolute -right-1 -top-1 flex items-center justify-center">
                  <div className="relative flex h-4 w-4 items-center justify-center rounded-sm bg-foreground px-1 text-xs text-background">
                    {totalItems}
                  </div>
                </div>
              )}
            </Button>
          ) : (
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger>
                <Button className="relative" variant="ghost" size="icon">
                  <Icons.MyCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <div className="absolute -right-1 -top-1 flex items-center justify-center">
                      <div className="relative flex h-4 w-4 items-center justify-center rounded-sm bg-foreground px-1 text-xs text-background">
                        {totalItems}
                      </div>
                    </div>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-96">
                <DropdownMenuLabel className="flex flex-1 items-center align-middle">
                  <span>My Cart</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <CartDropdown cart={cart} closeDropdown={toggleDropdown} />
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </>
      )}
    </div>
  );
};
