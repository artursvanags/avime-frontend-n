import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";

import type { Metadata } from "next";

const info: PageHeaderProps = {
  title: "FAQ",
  description: "Frequently Asked Questions",
};

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions",
};

export default function Page() {
  return (
    <>
      <PageHeader title={info.title} description={info.description} />
      <div className="container mb-12 py-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="payment-methods">
            <AccordionTrigger>
              What Payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept Cash as well as credit card payments via our online
              payment system. If you wish to pay with cash, please contact your
              school to receive AVIME brochure as well as an envelope where to
              put the cash.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pay-with-cash">
            <AccordionTrigger>
              If I would like to pay for the photos / packages with cash, what
              do I do?
            </AccordionTrigger>
            <AccordionContent>
              Your child will be provided with an envelope and a brochure inside
              of it. Please fill out the brochure and put the cash inside of the
              envelope. Please ensure the correct amount of cash as we are
              unable to give out change.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="online-order-payment">
            <AccordionTrigger>
              Can I order and pay for the photos / packages online?
            </AccordionTrigger>
            <AccordionContent>
              Yes you can order your package of choice as well as add ons
              online. Please log in with your Access code and press “order
              photos” tab. From there choose your package, add your choice of
              add ons and add it to your cart. After adding to your cart, go to
              checkout and purchase your chosen products. After purchasing you
              will receive an invoice. Please keep the invoice number in order
              to fill the brochure your school will provide you with.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="lost-envelope">
            <AccordionTrigger>
              What should I do if my child has lost the envelope with brochure?
            </AccordionTrigger>
            <AccordionContent>
              Please get in touch with AVIME at
              <Link
                className="font-medium underline underline-offset-4"
                href="mailto:hello@avime.com.au"
              >
                hello@avime.com.au
              </Link>{" "}
              as soon as possible to organize a replacement envelope. Please
              note every envelope contains a unique access code.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="late-order">
            <AccordionTrigger>
              I did not place order on or before the photo day. Is it too late?
            </AccordionTrigger>
            <AccordionContent>
              Please contact AVIME on{" "}
              <Link
                className="font-medium underline underline-offset-4"
                href="mailto:hello@avime.com.au"
              >
                hello@avime.com.au
              </Link>{" "}
              to discuss your options. Note, there might be late payment fee
              added to your order.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="staff-checks">
            <AccordionTrigger>
              Have your photographers and staff undergone a police check?
            </AccordionTrigger>
            <AccordionContent>
              Yes, it is a requirement that all our staff have current
              &apos;Working with Children&apos; accreditation and police
              clearance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="missing-photos">
            <AccordionTrigger>
              I haven&apos;t received my school photos, however other parents
              have. What should I do?
            </AccordionTrigger>
            <AccordionContent>
              Please contact AVIME on{" "}
              <Link
                className="font-medium underline underline-offset-4"
                href="mailto:hello@avime.com.au"
              >
                hello@avime.com.au
              </Link>{" "}
              so we can find the reason you are missing your package.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="wrong-product">
            <AccordionTrigger>
              What should I do if ordered the wrong product?
            </AccordionTrigger>
            <AccordionContent>
              If you have ordered a wrong product before shoot date, please get
              in touch with AVIME on{" "}
              <Link
                className="font-medium underline underline-offset-4"
                href="mailto:hello@avime.com.au"
              >
                hello@avime.com.au
              </Link>{" "}
              ASAP so we can find a solution. Please note, that as per our
              T&C&apos;s we are not liable for mistakes made on our website,
              however, we will try to do everything in our hands to fix this
              issue! If you have ordered the wrong product and notify us after
              shoot date, unfortunately, we won&apos;t be able to do much as the
              photos most likely are already in production stage. You can still
              contact us on{" "}
              <Link
                className="font-medium underline underline-offset-4"
                href="mailto:hello@avime.com.au"
              >
                hello@avime.com.au
              </Link>{" "}
              to discuss your options!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="separate-parent-orders">
            <AccordionTrigger>
              Can I order separate photos for each parent?
            </AccordionTrigger>
            <AccordionContent>
              The parent with custody has the option to provide the
              non-custodial parent with the child&apos;s individual access code,
              allowing them to place online orders, or they can use the pre-paid
              envelope to order for both parents. In cases where parents are
              estranged, the non-custodial parent should reach out to AVIME, and
              we will communicate with the school to establish the appropriate
              course of action.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="school-copy">
            <AccordionTrigger>
              Can school receive a copy of all school photos for internal use?
            </AccordionTrigger>
            <AccordionContent>
              Yes! Avime can provide you with a secure link that will contain
              photos of students and staff. Note this is for internal use only
              and can&apos;t be shared with students, their parents, or any
              other third party.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
