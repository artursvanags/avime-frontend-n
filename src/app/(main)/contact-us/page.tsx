import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";
import type { Metadata } from "next";
import { ContactUs } from "./ContactUs";

const info: PageHeaderProps = {
  title: "Contact Us",
  description: "We are here for you!",
};

export const metadata: Metadata = {
  title: info.title,
  description: "Get in touch with us to book us in for your school!",
};

export default function ContactsPage() {
  return (
    <>
      <PageHeader
        title={info.title}
        description={info.description}
        className="lg:pb-12"
      />
      <ContactUs />
    </>
  );
}
