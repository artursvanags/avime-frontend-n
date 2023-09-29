import React, { useState } from "react";
import { useProductActions } from "@/lib/context/product-context";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Button } from "@/components/ui/button";
import OptionSelect from "@/components/products/components/option-select";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

type ProductActionsProps = {
  product?: PricedProduct;
  disabled?: boolean; // Add a disabled prop
};

export default function AddToCart({
  product,
  disabled = false,
}: ProductActionsProps) {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions();

  const [adding, setAdding] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");
  const { toast } = useToast();

  const handleAddToCart = () => {
    setAdding(true);
    setAddToCartLoading(true);
    addToCart();

    // Simulate a delay of 2-3 seconds before marking as added
    setTimeout(() => {
      setAdding(false);
      setAddToCartLoading(false);
      setButtonText("Added!"); 

      toast({
        variant: "success",
        title: "Added to Cart!",
        description: `You have successfully added ${product?.title}`, // Your toast message
        action: <ToastAction asChild altText="Go to Cart">
          <Link href="/cart"> View Cart</Link>
        </ToastAction>,
      });
    }, 2000); // Delay for 2 seconds (2000 milliseconds)
  };

  return (
    <div className="flex flex-col gap-y-2">
      {product && product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            );
          })}
        </div>
      )}

      <Button
        size={"xl"}
        onClick={handleAddToCart}
        disabled={disabled || adding || addToCartLoading}
      >
        {adding
          ? "Adding..."
          : addToCartLoading
          ? "Adding to cart..."
          : !inStock
          ? "Out of stock"
          : disabled
          ? "Please login" // Display "Please login" when disabled
          : buttonText}
      </Button>
    </div>
  );
}
