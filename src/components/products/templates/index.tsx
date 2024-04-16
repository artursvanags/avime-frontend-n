"use client";

import { ProductProvider } from "@/lib/context/product-context";
import React, { useRef } from "react";
import ImageGallery from "../components/image-gallary";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import ProductActions from "../components/product-actions";
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button";

type ProductTemplateProps = {
  product: PricedProduct;
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef<HTMLDivElement>(null);

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
          <ProductActions product={product} />
        </div>
      </div>
    </ProductProvider>
  );
};

export default ProductTemplate;
