"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container grid h-[80vh] grid-cols-12 items-stretch justify-start space-y-4">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Elevating elegance, <br /> Capturing legacy.
        </h1>
        <p className="max-w-[42rem] pt-2 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Making Australian schools great again, one photo at a time.
        </p>
        <div className="pt-14">
          <div className="space-x-2">
            <Link
              href="/contacts"
              className={cn(buttonVariants({ size: "xl" }))}
            >
              Contact Us
            </Link>
            <Link
              href="about-us"
              className={cn(buttonVariants({ size: "xl", variant: "outline" }))}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="relative hidden overflow-hidden lg:col-span-5 lg:mt-0 lg:flex">
        <Image
          src="/aus_hero_image.png"
          loading="lazy"
          fill
          className="scale-[1.4] object-contain"
          alt="Image"
        />
      </div>
    </section>
  );
}
