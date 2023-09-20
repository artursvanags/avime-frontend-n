"use client";

import { useProducts } from "medusa-react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import Grid from "@/components/global/grid";
import { ProductCardPackage } from "../components/ProductCardPackage";

export default function ListProducts() {
  const { products, isLoading } = useProducts();

  return (
    <div className="py-14">
      {isLoading ? (
        <Grid className="container grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCardSkeleton />
        </Grid>
      ) : (
        <>
          {products && !products.length && <span>No Products</span>}
          {products && products.length > 0 ? (
            <div className="space-y-12">
              <div>
                <h2 className="container pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Packages
                </h2>
                <Grid className="container grid-cols-2 pb-5 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCardPackage products={products} />
                </Grid>
              </div>
              <div>
                <h2 className="container pb-12 font-heading text-4xl underline decoration-2 underline-offset-4">
                  Prints
                </h2>
                <Grid className="container grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <ProductCard products={products} />
                </Grid>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
