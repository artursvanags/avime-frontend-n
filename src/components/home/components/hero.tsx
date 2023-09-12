import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="container flex flex-col justify-start space-y-4 py-32 lg:py-48">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Elevating school photography <br /> to a new level.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Crafting comprehensive photography solutions for educational
          institutions.
        </p>
        <div className="space-x-2">
          <Link href="/store" className={cn(buttonVariants({ size: "xl" }))}>
            View Products
          </Link>
          <Link
            href="about us"
            className={cn(buttonVariants({ size: "xl", variant: "outline" }))}
          >
            About Us
          </Link>
        </div>
    </section>
  );
}
