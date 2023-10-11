import Image from "next/image";
import { Product as MedusaProduct } from "@/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Link from "next/link";
import Grid from "@/components/global/grid";
import { useAccount } from "@/lib/context/account-context";
import { findCheapestVariantPrice as price } from "@/lib/util/get-price";
import { Icons } from "@/config/icons";
import useProductPrice from "@/lib/hooks/use-product-price";
import { cn } from "@/lib/utils";

type CardProp = {
  products: (MedusaProduct | PricedProduct)[];
  productMeta?: string;
};

export function ProductCardHorizontal({ products, productMeta }: CardProp) {
  // Filter out products with metadata key "is_package" set to true
  const filteredProducts = productMeta
    ? products.filter((p) => p.metadata && p.metadata[productMeta] === "true")
    : products;
  const { customer, retrievingCustomer } = useAccount();

  // Sort the filteredProducts array in ascending order based on the title
  filteredProducts.sort((a, b) => {
    const titleA = a.title ? a.title.toLowerCase() : "";
    const titleB = b.title ? b.title.toLowerCase() : "";

    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      {filteredProducts.map((p) => {
        const { cheapestPrice } = useProductPrice({
          id: p.id!,
          variantId: p.variants[0].id,
        });

        return (
          <Grid.Item key={p.id}>
            <Link
              href={`/products/${p.handle}`}
              className="relative grid h-full w-full grid-cols-10 gap-6 p-2 transition-colors hover:bg-stone-100 dark:bg-transparent dark:hover:bg-stone-900"
            >
              <Icons.Layers className="absolute right-2 top-2 hidden text-muted-foreground lg:block" />
              <div className="col-span-4 aspect-square">
                <Image
                  src={p?.thumbnail || "/default-image.jpg"}
                  width={420}
                  height={420}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  alt={p.title ?? "Product Title"}
                />
              </div>

              <div className="col-span-6">
                <h3 className="pt-1 text-2xl font-bold">{p.title}</h3>
                <div className="pt-1 text-xl text-muted-foreground">
                  {!retrievingCustomer && customer ? (
                    <div>
                      {cheapestPrice ? (
                        <>
                          {cheapestPrice?.price_type === "sale" && (
                            <span className="text-gray-500 line-through">
                              {cheapestPrice.original_price}
                            </span>
                          )}
                          <span
                            className={cn("font-semibold", {
                              "text-rose-500":
                                cheapestPrice?.price_type === "sale",
                            })}
                          >
                            {cheapestPrice?.calculated_price}
                          </span>
                        </>
                      ) : (
                        <div className="h-6 w-20 animate-pulse bg-gray-100"></div>
                      )}
                    </div>
                  ) : (
                    <div>A$ Please Login to view Pricing</div>
                  )}
                </div>
                <div className="whitespace-pre-line pt-3 text-justify text-sm">
                  {p.description}
                </div>
              </div>
            </Link>
          </Grid.Item>
        );
      })}
    </>
  );
}
