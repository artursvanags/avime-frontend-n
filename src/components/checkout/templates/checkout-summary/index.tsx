"use client";

import DiscountCode from "@/components/checkout/components/discount-code";
import GiftCard from "@/components/checkout/components/gift-card";
import PaymentButton from "@/components/checkout/components/payment-button";
import CartTotals from "@/components/common/components/cart-totals";
import { useCart } from "medusa-react";

const CheckoutSummary = () => {
  const { cart } = useCart();

  if (!cart?.id) {
    return null;
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse gap-y-8 small:flex-col">
      <div className="flex w-full flex-col gap-y-6 bg-secondary p-6">
        <CartTotals cart={cart} />
        <PaymentButton paymentSession={cart?.payment_session} />
      </div>
      <div className="bg-secondary p-6">
        <DiscountCode cart={cart} />
      </div>
      <GiftCard cart={cart} />
    </div>
  );
};

export default CheckoutSummary;
