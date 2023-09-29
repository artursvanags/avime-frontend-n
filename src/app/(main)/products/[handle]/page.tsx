"use client";
import { getProductByHandle } from "@/lib/data";
import ProductTemplate from "@/components/products/templates";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { useProducts } from "medusa-react";

type Props = {
  params: { handle: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProductByHandle(params.handle);

  const product = data.products[0];

  if (!product) {
    notFound();
  }

  return {
    title: `${product.title} | Acme Store`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Acme Store`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  };
}

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

export default async function CollectionPage({ params }: Props) {
  const region = getRegion();
  const cart = getCart();
  const { products, isLoading } = useProducts({
    handle: params.handle,
    region_id: region?.regionId,
    cart_id: cart || undefined,
    currency_code: region?.countryCode,
  });

  return (
    <>
      {products ? (
        products.length > 0 ? (
          // Render your product information here, such as the first product's title
          <ProductTemplate product={products[0]} />
        ) : (
          // Handle the case when there are no products
          <div>No products available</div>
        )
      ) : (
        // Handle the loading state, e.g., show a loading spinner
        <div>Loading...</div>
      )}
    </>
  );
}
