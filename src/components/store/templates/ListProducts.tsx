"use client";
import { useProducts, formatVariantPrice } from "medusa-react";
import { ProductCard } from "../components/ProductCard";

export default function ListProducts() {
    const { products, isLoading } = useProducts()
  return (
    <div>
        
      {isLoading && <span>Loading...</span>}
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <div>
          {products.map((product) => (
        
          ))}
        </div>
      )}
    </div>
  );
}
