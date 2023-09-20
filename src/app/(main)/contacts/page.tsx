import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "Contacts",
  description: "We are here for you!",
};

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader title={info.title} description={info.description} />
    </>
  );
}
