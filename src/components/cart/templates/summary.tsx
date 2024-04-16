import { Cart, Region } from "@medusajs/medusa";
import { Button } from "@/components/ui/button";
import CartTotals from "@/components/common/components/cart-totals";
import Link from "next/link";
import { formatAmount } from "medusa-react";
import router from "next/router";

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};

const Summary = ({ cart }: SummaryProps) => {
  const total = (amount: number | undefined, region: Region) =>
    formatAmount({
      amount: amount || 0,
      region: region,
      includeTaxes: false,
    });
  const handleItemClick = (link: string) => {
    router.push(link);
  };
  return (
    <div className="grid grid-cols-1 gap-y-6">
      <CartTotals cart={cart} />
      <Button
        disabled={cart.subtotal && cart.subtotal < 3000 ? true : false}
        size="xl"
        onClick={() => handleItemClick("/checkout")}
      >
        Go to checkout
      </Button>
      {cart.subtotal && cart.subtotal < 3000 && (
        <div className="text-muted-foreground">
          <p>Minimum cart total required: {total(3000, cart.region)}</p>
          <p>
            Remaining to add:{" "}
            {total(Math.max(0, 3000 - (cart.subtotal || 0)), cart.region)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Summary;
