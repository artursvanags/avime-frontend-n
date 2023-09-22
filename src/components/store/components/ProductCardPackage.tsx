import Image from "next/image";
import { Product as MedusaProduct } from "@/types/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import Link from "next/link";
import Grid from "@/components/global/grid";
import { useAccount } from "@/lib/context/account-context";
import { findCheapestVariantPrice as price } from "@/lib/util/get-price";

type CardProp = {
  products: (MedusaProduct | PricedProduct)[];
};

export function ProductCardPackage({ products }: CardProp) {
  // Filter products to include only those with metadata key "is_package" set to true
  const filteredProducts = products.filter(
    (p) => p.metadata && p.metadata.is_package === "true",
  );
  const { customer, retrievingCustomer } = useAccount();
  return (
    <>
      {filteredProducts.map((p) => (
        <Grid.Item key={p.id}>
          <Link
            href={`/products/${p.handle}`}
            className="relative inline-block h-full w-full p-2 transition-colors hover:bg-stone-100 dark:bg-transparent dark:hover:bg-stone-900"
          >
            <div className="relative aspect-square">
              <Image
                src={p?.thumbnail || "/default-image.jpg"}
                fill
                className="object-cover"
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
