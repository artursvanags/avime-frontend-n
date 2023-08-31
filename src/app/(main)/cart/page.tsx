import CartTemplate from "@/components/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "View your shopping bag",
}

export default function Cart() {
  return <CartTemplate />
}
