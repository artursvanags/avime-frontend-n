"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container flex flex-col gap-4 pt-4 pb-14 lg:grid lg:grid-cols-12 lg:py-32">
      <div className="order-2 lg:order-1 lg:col-span-8 lg:place-self-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Elevating elegance, <br /> Capturing legacy.
        </h1>
        <p className="max-w-[42rem] pt-2 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Making Australian schools great again, one photo at a time.
        </p>
        <div className="pt-14">
          <div className="flex space-x-2">
            <Link
              href="/contacts"
              className={cn(
                "flex-grow lg:flex-none",
                buttonVariants({ size: "xl", variant: "default" }),
              )}
            >
              Contact Us
            </Link>
            <Link
              href="/about-us"
              className={cn(
                "flex-grow lg:flex-none",
                buttonVariants({ size: "xl", variant: "outline" }),
              )}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:col-span-4">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/aus_hero_image.png"
            width={1024}
            height={1024}
            className="h-full w-full object-contain scale-[1.4] "
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
}
