import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import ListProducts from "@/components/store/templates/ListProducts";
import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "Order Photos",
  description: "View our current product catalog!",
};

export const metadata: Metadata = {
  title: info.title,
  description: "Log in. View Cart. Order photos online with few simple clicks!",
};

export default function StorePage() {
  return (
    <>
      <PageHeader title={info.title} description={info.description} className="lg:pt-10 lg:pb-14 border-b" />
      <ListProducts />
    </>
  );
}
