import SearchNavigation from "./search-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access Photos",
  description:
    "Enter your photo key and download photos instanty on your phone!",
};

export default function AccessPage() {
  return (
    <>
      <SearchNavigation />
    </>
  );
}
