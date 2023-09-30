import { useStore } from "@/lib/context/store-context";
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items";
import { Button } from "@/components/ui/button";
import LineItemOptions from "@/components/common/components/line-item-options";
import LineItemPrice from "@/components/common/components/line-item-price";
import { formatAmount, useCart } from "medusa-react";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cart } from "@medusajs/medusa";

interface CartDropDownProps {
  cart: Omit<Cart, "refundable_amount" | "refunded_total"> | undefined;
  closeDropdown: () => void; // Callback function to close the dropdown
}

const CartDropdown: React.FC<CartDropDownProps> = ({ cart, closeDropdown }) => {
  const items = useEnrichedLineItems();
  const { deleteItem } = useStore();

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
                      <div className="flex items-start justify-between">
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
                          <div className=" text-xs text-muted-foreground">
                            Quantity: {item.quantity}
                          </div>
                        </div>
                        <div className="flex justify-end text-sm">
                          <LineItemPrice region={cart.region} item={item} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between">
                      <div>
                        <Button
                          className="flex items-center gap-x-1"
                          size={"sm"}
                          variant={"outline"}
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
            
              <Link href="/cart" passHref>
                <Button
                  className="w-full"
                  onClick={() => {
                    closeDropdown(); 
                  }}
                  size={"xl"}
                >
                  Go to Cart
                </Button>
              </Link>
        
          </div>
        </>
      ) : (
        <div>
          <div className="flex flex-col justify-center gap-y-4 px-4 py-4">
            Your cart is empty.
            <Link href="/store">
              <Button
                className="w-full"
                size={"xl"}
                variant={"outline"}
                onClick={() => {
                  closeDropdown(); // Call the closeDropdown callback to close the dropdown
                }}
              >
                View products
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
