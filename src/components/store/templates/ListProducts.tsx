"use client";
import { useProducts, formatVariantPrice } from "medusa-react";
import { ProductCard } from "../components/ProductCard";

export default function ListProducts() {
    const { products, isLoading } = useProducts()
  return (
    <div>test
    </div>
  );
}
