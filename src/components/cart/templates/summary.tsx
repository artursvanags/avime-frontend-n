import { Cart } from "@medusajs/medusa";
import { Button } from "@/components/ui/button";
import CartTotals from "@/components/common/components/cart-totals";
import Link from "next/link";

type SummaryProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};

const Summary = ({ cart }: SummaryProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6">
      <CartTotals cart={cart} />

      <Button size="xl" asChild>
        <Link href="/checkout">Go to checkout</Link>
      </Button>
    </div>
  );
};

export default Summary;
