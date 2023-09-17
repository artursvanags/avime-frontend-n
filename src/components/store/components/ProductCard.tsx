import Image from "next/image";
import { Product as MedusaProduct } from "@/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Link from "next/link";
import Grid from "@/components/global/grid";
import { Badge } from "@/components/ui/badge";

type CardProp = {
  products: (MedusaProduct | PricedProduct)[];
  loading?: boolean;
};

export function ProductCard({ products, loading }: CardProp) {
  return (
    <>
      {products?.map((p) => (
        <Grid.Item key={p.id}>
          <Link
            href={`/products/${p.handle}`}
            className=" relative inline-block h-full w-full rounded border bg-stone-50 p-6 hover:bg-stone-100 dark:bg-transparent dark:hover:bg-stone-900"
          >
            <div className="relative aspect-square">
              <Image
                src={p?.thumbnail || "/default-image.jpg"}
                fill
                className="rounded object-cover"
                alt={p.title ?? "Product Title"}
              />
            </div>
            <h3 className="pt-2 font-medium">{p.title}</h3>
            {p.tags && p.tags.length > 0 && (
              <div className="flex flex-row space-x-1 pt-1">
                {p.tags?.map((tag) => (
                  <Badge key={tag.id} variant={"secondary"}>
                    {tag.value}
                  </Badge>
                ))}
              </div>
            )}
            <div className="pt-2 text-justify text-sm text-muted-foreground">
              {p.description}
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
