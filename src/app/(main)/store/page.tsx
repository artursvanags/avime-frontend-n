import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import ListProducts from "@/components/store/templates/ListProducts";
import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "Store",
  description: "View our current product catalog!",
};

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function StorePage() {
  return (
    <>
      <PageHeader title={info.title} description={info.description} className="lg:pt-30 lg:pb-14" />
      <ListProducts />
    </>
  );
}
