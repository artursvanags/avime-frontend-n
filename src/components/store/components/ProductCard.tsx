import Image from "next/image";
import { Product as MedusaProduct } from "@/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Link from "next/link";
import Grid from "@/components/global/grid";
import { useAccount } from "@/lib/context/account-context";
import { findCheapestVariantPrice as price } from "@/lib/util/get-price";

type CardProp = {
  products: (MedusaProduct | PricedProduct)[];
  productMeta?: string;
};

export function ProductCard({ products, productMeta }: CardProp) {
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
      {filteredProducts.map((p) => (
        <Grid.Item key={p.id}>
          <Link
            href={`/products/${p.handle}`}
            className="relative inline-block h-full w-full p-2 transition-colors hover:bg-stone-100 dark:bg-transparent dark:hover:bg-stone-900"
          >
            <div className="aspect-square">
              <Image
                src={p?.thumbnail || "/default-image.jpg"}
                width={420}
                height={420}
                loading="lazy"
                className="w-full h-full object-cover"
                alt={p.title ?? "Product Title"}
              />
            </div>

            <h3 className="pt-1 text-sm font-medium">{p.title}</h3>
            <div className="pt-1 text-sm text-muted-foreground">
              {!retrievingCustomer && customer ? (
                <div>A$ {price(p)}</div>
              ) : (
                <div>A$ Please Login to view Pricing</div>
              )}
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
