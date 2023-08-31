import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ArrowBigUpDash } from 'lucide-react';

const Hero = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-48">
    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        Elevating school photography <br /> to a new level.
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
      Crafting comprehensive photography solutions for educational institutions. 
      </p>
      <div className="space-x-4">
        <Link href="/login" className={cn(buttonVariants({ size: "xl" }))}>
          Get Started
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero
