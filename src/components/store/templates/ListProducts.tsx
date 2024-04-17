"use client";
import { useProducts } from "medusa-react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import Grid from "@/components/global/grid";
import { ProductCardHorizontal } from "../components/ProductCardHorizontal";

const IS_SERVER = typeof window === "undefined";
const CART_KEY = "medusa_cart_id";
const REGION_KEY = "medusa_region";

const getRegion = () => {
  if (!IS_SERVER) {
    const region = localStorage.getItem(REGION_KEY);
    if (region) {
      return JSON.parse(region) as { regionId: string; countryCode: string };
    }
  }
  return null;
};

const getCart = () => {
  if (!IS_SERVER) {
    return localStorage.getItem(CART_KEY);
  }
  return null;
};

export default function ListProducts() {
  const region = getRegion();
  const cart = getCart();
  const { products, isLoading } = useProducts({
    region_id: region?.regionId,
    cart_id: cart || undefined,
    currency_code: region?.countryCode,
  });

  return (
    <div className="py-14">
      {isLoading ? (
        <Grid className="container grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCardSkeleton />
        </Grid>
      ) : (
        <>
          {products && !products.length && <span>No Products</span>}
          {products && products.length > 0 ? (
            <div className=" container space-y-12">
              <div>
                <h2 className="pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Step 1 - Choose your package
                </h2>
                <Grid className="grid-cols-1 pb-5 lg:grid-cols-2">
                  <ProductCardHorizontal
                    products={products}
                    productMeta={"is_package"}
                  />
                </Grid>
              </div>
              <div>
                <div className="pb-4">
                  Have you chosen your package? Check out some extra options to
                  make the most out of your photos.
                </div>
                <h2 className="pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Step 2 - Add ons
                </h2>
                <h2 className="pb-12 font-heading text-2xl">Products</h2>
                <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCard products={products} productMeta={"is_product"} />
                </Grid>
              </div>
              <div>
                <h2 className="pb-12 font-heading text-2xl">Prints</h2>
                <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCard products={products} productMeta={"is_print"} />
                </Grid>
              </div>
              <div>
                <h2 className="pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Sibling Photos
                </h2>
                <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCard products={products} productMeta={"is_sibling"} />
                </Grid>
              </div>
              <div>
                <h2 className="pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Sibling Photo Addons
                </h2>
                <Grid className="grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCard
                    products={products}
                    productMeta={"is_sibling_addons"}
                  />
                </Grid>
              </div> 
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
