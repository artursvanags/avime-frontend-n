import { useStore } from "@/lib/context/store-context";
import { LineItem, Region } from "@medusajs/medusa";
import LineItemPrice from "@/components/common/components/line-item-price";
import { DropdownQuantityIcons } from "@/config/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">;
  region: Region;
};

const ItemSelect: React.FC<{ item: any }> = ({ item }) => {
  const { deleteItem, updateItem } = useStore();
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
    <div className="flex items-center gap-x-1">
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
        className="m-0 h-7 w-12 rounded-sm p-0 text-center shadow-none"
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
      <Button
        className="flex h-7 items-center"
        size={"sm"}
        variant={"destructive"}
        onClick={() => deleteItem(item.id)}
      >
        Remove
      </Button>
    </div>
  );
};

const Item = ({ item, region }: ItemProps) => {
  return (
    <div className=" grid grid-cols-1 gap-y-8">
      <div className="grid grid-cols-[120px_1fr] gap-x-4" key={item.id}>
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
                <h3 className="mr-4 text-2xl font-semibold">
                  <Link
                    href={`/products/${item.variant.product.handle}`}
                    legacyBehavior
                  >
                    {item.title}
                  </Link>
                </h3>
                {/* <LineItemOptions variant={item.variant} /> */}
              </div>

              <div className="flex flex-1 justify-end">
                <div className=" flex items-center justify-end pr-2 text-muted-foreground">
                  {item.quantity} x
                </div>
                <LineItemPrice region={region} item={item} />
              </div>
            </div>
            <div className=" flex flex-1 items-end gap-x-1 ">
              <ItemSelect item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
