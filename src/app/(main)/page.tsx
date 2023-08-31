import FeaturedProducts from "@/components/home/components/featured-products"
import Hero from "@/components/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the ACME. Worldwide Shipping. Secure Payment.",
}

const Home = () => {
  return (
    <>
      <Hero />
    </>
  )
}

export default Home
