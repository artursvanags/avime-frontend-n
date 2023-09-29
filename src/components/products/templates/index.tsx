"use client";

import { ProductProvider } from "@/lib/context/product-context";
import { useIntersection } from "@/lib/hooks/use-in-view";
import ProductTabs from "@/components/products/components/product-tabs";
import RelatedProducts from "@/components/products/components/related-products";
import ProductInfo from "@/components/products/templates/product-info";
import React, { useRef } from "react";
import ImageGallery from "../components/image-gallary";
import MobileActions from "../components/mobile-actions";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { findCheapestVariantPrice as price } from "@/lib/util/get-price";
import { useAccount } from "@/lib/context/account-context";
import AddToCart from "../components/AddToCart";

type ProductTemplateProps = {
  product: PricedProduct;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef<HTMLDivElement>(null);
  const { customer, retrievingCustomer } = useAccount();

  return (
    <ProductProvider product={product}>
      <div className="container relative flex flex-col py-6 small:flex-row small:items-start">
        <div className="flex w-full flex-col gap-y-8">
          <ImageGallery images={product?.images || []} />
        </div>
        <div
          className="flex w-full flex-col py-8 small:sticky small:top-20 small:max-w-[344px] small:py-0 medium:max-w-[400px]"
          ref={info}
        >
          <h1 className="pt-1 font-heading text-5xl">{product.title}</h1>
          <div className=" text-4xl font-medium text-muted-foreground">
            {!retrievingCustomer && customer ? (
              <>A$ {price(product)}</>
            ) : (
              <>A$ Please Login to view Pricing</>
            )}
          </div>
          <div className="whitespace-pre-line pt-3 text-justify text-sm">
            {product.description}
          </div>

          <div className="pt-1 text-sm text-muted-foreground">
            {!retrievingCustomer && customer ? (
              <>
                <AddToCart product={product}/>
              </>
            ) : (
              <AddToCart disabled />
            )}
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default ProductTemplate;
