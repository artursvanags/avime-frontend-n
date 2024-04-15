import { CheckoutProvider } from "@/lib/context/checkout-context";
import ChevronDown from "@/components/common/icons/chevron-down";
import Link from "next/link";
import CheckoutLoader from "../components/checkout-loader";
import CheckoutForm from "./checkout-form";
import CheckoutSummary from "./checkout-summary";

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className=" relative small:min-h-screen">
        <div className="h-16 ">
          <nav className="content-container flex h-full items-center justify-between">
            <Link
              href="/cart"
              className="text-small-semi flex flex-1 basis-0 items-center gap-x-2 uppercase text-gray-700"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden text-primary small:block">
                  Back to shopping cart
                </span>
                <span className="mt-px block small:hidden">Back</span>
              </>
            </Link>
            <Link href="/" className="text-xl-semi">
              ACME
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative">
          <CheckoutLoader />
          <div className="content-container grid grid-cols-1 gap-x-8 gap-y-8 py-12 small:grid-cols-[1fr_416px]">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
        <div className="flex w-full items-center justify-center py-4"></div>
      </div>
    </CheckoutProvider>
  );
};

export default CheckoutTemplate;
