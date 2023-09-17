"use client";

import { useProducts } from "medusa-react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import Grid from "@/components/global/grid";

export default function ListProducts() {
  const { products, isLoading } = useProducts();

  return (
    <div className="py-6">
      {isLoading ? (
        <Grid className="container grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCardSkeleton />
        </Grid>
      ) : (
        <>
          {products && !products.length && <span>No Products</span>}
          {products && products.length > 0 ? (
            <Grid className="container grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard products={products} loading={isLoading} />
            </Grid>
          ) : null}
        </>
      )}
    </div>
  );
}
