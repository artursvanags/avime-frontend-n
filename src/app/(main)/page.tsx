import Hero from "@/components/home/components/hero"
import Features from "@/components/home/components/features"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  )
}

