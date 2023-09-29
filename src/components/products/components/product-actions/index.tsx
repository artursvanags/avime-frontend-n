import { useProductActions } from "@/lib/context/product-context";
import useProductPrice from "@/lib/hooks/use-product-price";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { Button } from "@/components/ui/button";
import OptionSelect from "@/components/products/components/option-select";
import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useAccount } from "@/lib/context/account-context";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { Spinner } from "@/config/icons";

type ProductActionsProps = {
  product: PricedProduct;
};

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions();
  const { customer, retrievingCustomer } = useAccount();
  const price = useProductPrice({ id: product.id!, variantId: variant?.id });
  const { toast } = useToast();
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price;

    return variantPrice || cheapestPrice || null;
  }, [price]);

  const handleAddToCart = () => {
    setAdding(true);

    // Call the addToCart function
    addToCart();

    // Simulate a delay of 2-3 seconds before marking as added
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
      setButtonText("Added!");

      toast({
        variant: "success",
        title: "Added to Cart!",
        description: `You have successfully added ${product?.title}`,
        action: (
          <ToastAction asChild altText="View Cart">
            <Link href="/cart">View Cart</Link>
          </ToastAction>
        ),
      });
    }, 2000); // Delay for 2 seconds (2000 milliseconds)
  };

  return (
    <div className="flex flex-col gap-y-2">
      {/* Product collection info*/}
      {product.collection && (
        <Link
          href={`/collections/${product.collection.handle}`}
          className="text-small-regular text-gray-700"
        >
          {product.collection.title}
        </Link>
      )}
      {/* Product heading */}
      <h1 className="pt-1 font-heading text-5xl">{product.title}</h1>

      {/* Product pricing */}
      {!retrievingCustomer && customer ? (
        selectedPrice ? (
          <div className="flex flex-col text-3xl font-bold">
            <span
              className={clsx("", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Original: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )
      ) : (
        <>A$ Please Login to view Pricing</>
      )}
      {}
      <div className="whitespace-pre-line pt-3 text-justify text-sm">
        {product.description}
      </div>

      {/* Product options, if multiple */}
      {product.variants.length > 1 && (
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

      {/* Product button*/}
      <div className="flex flex-col pt-3">
        {!retrievingCustomer && customer ? (
          <Button
            size={"xl"}
            onClick={handleAddToCart}
            disabled={adding}
          >
            {adding
              ? <><Spinner className="animate-spin w-5 h-5 mr-2"/>Adding...</>
              : !inStock
              ? "Out of stock"
              : buttonText}
          </Button>
        ) : (
          <>A$ Please Login to view Pricing</>
        )}
      </div>
    </div>
  );
};

export default ProductActions;
