import Hero from "@/components/home/components/hero";
import Features from "@/components/home/components/features";
import Features2 from "@/components/home/components/features2";
import { Metadata } from "next";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features2 />
      <Features />
    </>
  );
}
