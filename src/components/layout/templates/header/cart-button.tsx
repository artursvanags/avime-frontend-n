import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/config/icons";
import { useAccount } from "@/lib/context/account-context";
import { useCart } from "medusa-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CartButtonProps extends React.ComponentProps<"div"> {
  onClick?: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ className, onClick }) => {
  const router = useRouter();
  const { customer, retrievingCustomer } = useAccount();
  const { totalItems } = useCart();

  const handleItemClick = (link: string) => {
    router.push(link);
  };

  return (
    <div className={cn(className)}>
      {!retrievingCustomer && customer && (
        <Button
          className="relative"
          onClick={() => {
            handleItemClick("/cart");
            onClick?.();
          }}
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
      )}
    </div>
  );
};
