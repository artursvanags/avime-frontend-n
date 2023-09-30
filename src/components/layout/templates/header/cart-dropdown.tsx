import { useStore } from "@/lib/context/store-context";
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items";
import { Button } from "@/components/ui/button";

import LineItemPrice from "@/components/common/components/line-item-price";
import { formatAmount, useCart } from "medusa-react";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Cart } from "@medusajs/medusa";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DropdownQuantityIcons, Icons } from "@/config/icons";
interface CartDropDownProps {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | undefined;
  closeDropdown: () => void; // Callback function to close the dropdown
}

const ItemSelect: React.FC<{ item: any }> = ({ item }) => {
  const { updateItem } = useStore();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    // Ensure the quantity is within valid bounds (minimum 1)
    const updatedQuantity = Math.max(newQuantity, 1);
    setQuantity(updatedQuantity);
    updateItem({
      lineId: item.id,
      quantity: updatedQuantity,
    });
  };

  return (
    <div className="flex items-center">
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
        className="h-7 w-7 rounded-sm"
      >
        <DropdownQuantityIcons.Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
        className="m-0 mx-1 h-7 w-12 rounded-sm p-0 text-center shadow-none"
        min={1}
      />
      <Button
        variant={"outline"}
        size={"icon"}
        onClick={() => handleQuantityChange(quantity + 1)}
        className="h-7 w-7 rounded-sm"
      >
        <DropdownQuantityIcons.Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

const CartDropdown: React.FC<CartDropDownProps> = ({ cart, closeDropdown }) => {
  const items = useEnrichedLineItems();
  const { deleteItem } = useStore();
  const router = useRouter();

  const handleItemClick = (link: string) => {
    router.push(link);
    closeDropdown();
  };

  return (
    <>
      {cart && items?.length ? (
        <>
          <div className="no-scrollbar grid max-h-[402px] grid-cols-1 gap-y-8 overflow-y-scroll p-4">
            {items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1;
              })
              .map((item) => (
                <div
                  className="grid grid-cols-[80px_1fr] gap-x-4"
                  key={item.id}
                >
                  <div className="relative">
                    {item.thumbnail && ( // Check if thumbnail is not null or undefined
                      <div className="aspect-square">
                        <Image
                          src={item.thumbnail || "/default-image.jpg"}
                          width={128}
                          height={128}
                          loading="lazy"
                          className="h-full w-full rounded-sm object-cover"
                          alt={item.title ?? "Product Title"}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start">
                        <div>
                          <h3 className="mr-4 w-[130px] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-semibold">
                            <Link
                              href={`/products/${item.variant.product.handle}`}
                              legacyBehavior
                              onClick={() => {
                                closeDropdown();
                              }}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          {/* <LineItemOptions variant={item.variant} /> */}
                        </div>

                        <div className="justify-end text-sm flex flex-1">
                        <div className=" text-xs justify-end flex  items-center text-muted-foreground pr-2">{item.quantity} x</div>
                          <LineItemPrice region={cart.region} item={item} />
                         
                        </div>
                        
                      </div>
                      <div className=" flex flex-1 items-end gap-x-1 py-1 text-sm ">
                          <ItemSelect item={item} />
                            <Button
                              className="flex items-center gap-x-1 h-7 "
                              size={"sm"}
                              variant={"secondary"}
                              onClick={() => deleteItem(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <DropdownMenuSeparator />
          <div className="flex flex-col gap-y-1 p-4">
            <div className="flex items-center justify-between">
              <div className=" text-lg font-normal">Total</div>
              <div className=" font-heading text-2xl">
                {formatAmount({
                  amount: cart.subtotal || 0,
                  region: cart.region,
                  includeTaxes: false,
                })}
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button
                className="flex-grow"
                onClick={() => handleItemClick("/cart")}
                size={"xl"}
                variant={"outline"}
              >
                Go to Cart
              </Button>
              <Button
                className="flex-grow"
                onClick={() => handleItemClick("/checkout")}
                size={"xl"}
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="flex flex-col justify-center gap-y-4 px-4 py-4">
            Your cart is empty.
            <Button
              className="w-full"
              size={"xl"}
              variant={"outline"}
              onClick={() => handleItemClick("/store")}
            >
              View products
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
