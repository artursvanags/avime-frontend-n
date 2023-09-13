import PageHeader, {
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "About Us",
  description: "Get to know us better!",
};

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={info.title} description={info.description} />
    </>
  );
}
