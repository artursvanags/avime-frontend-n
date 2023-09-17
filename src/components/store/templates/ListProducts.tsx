"use client";

import { useProducts } from "medusa-react";
import { ProductCard } from "../components/ProductCard";
import Grid from "@/components/global/grid";

export default function ListProducts() {
  const { products, isLoading } = useProducts();

  return (
    <div className="py-6">
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No Products</span>}
      <Grid className="container grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products && products.length > 0 ? (
          <ProductCard products={products} loading={isLoading}/>
        ) : null}
      </Grid>
    </div>
  );
}
