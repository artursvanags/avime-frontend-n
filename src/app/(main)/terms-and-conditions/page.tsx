import Link from "next/link";
import { Metadata } from "next/types";
import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";

const info: PageHeaderProps = {
  title: "Terms and Conditions",
  description: "Please carefully review the following terms.",
};

export const metadata: Metadata = {
  title: info.title,
  description: info.description,
};

export default function Page() {
  return (
    <>
      <PageHeader
        title={info.title}
        description={info.description}
        className="md:items-center md:text-center"
      />
      <div className="container mb-12 grid max-w-3xl gap-4 py-8">
        <div className="grid gap-4 border-b pb-8">
          <section>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Welcome to AVIME photography studio. Prior to utilizing our
              website, please carefully review the following terms.
              Understanding and agreeing to these terms of service is essential
              before accessing our services.
            </p>
          </section>

          <section>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              These Terms and Conditions serve as a contractual agreement
              between you and AVIME Pty Ltd and are a binding contract between
              you and AVIME. By using this Website, You agree to these Terms &
              Conditions and you accept, consent and agree to be bound by the
              Terms and Conditions outlined below.
            </p>
          </section>

          <section>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We utilize Medusa independently audited e-commerce platform and
              services to uphold the highest standards of security and
              compliance. While certain aspects of our operations extend beyond
              this scope, our primary platform for managing payments,
              collections, orders, and photo distribution operates through
              avime.au website as well as https://www.digitalocean.com/ hosting
              platform. As such we leverage their certifications, uptime,
              incident and business continuity procedures (or contract these
              out) for AVIME. We advise you to retain a copy of these Terms and
              Conditions for future reference.
            </p>
          </section>

          <section>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Should you have any inquiries or concerns regarding these Terms
              and Conditions, please reach out to us at hello@avime.com.au.
            </p>
          </section>
        </div>
        <div className="grid gap-4">
          <section>
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Copyright and Intellectual Property:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We are the owner or the licensee of all intellectual property
              rights within our services, which include but are not limited to
              school photography, yearbooks, personalised merchandise and other
              associated school photography related services (“Services”). We
              are also the owner or licensee of the material published on our
              websites (which includes but is not limited to the avime.au and
              avime.com.au domains) and applications collectively (“Websites”).
              Those works are protected by copyright laws and treaties around
              the world. All such rights are reserved.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You are permitted to print one copy or download extracts of any
              page(s) from our websites for personal use only. Modifications to
              any materials printed or downloaded are strictly prohibited, and
              you must not use any illustrations, photographs, videos, audio
              sequences, or graphics separately from accompanying text.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Acknowledgement of our status (and that of any identified
              contributors) as the authors of content on our websites is
              mandatory. Unless expressly agreed upon in writing beforehand, you
              must refrain from using any part of the content on our websites
              for commercial purposes without obtaining a license or permission
              from us.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Any breach of these terms will result in immediate cessation of
              your right to use our services and websites. You may be required,
              at our discretion, to return or destroy any copies of materials
              you have made.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Unless expressly agreed upon in advance and in writing, you are
              prohibited from utilizing any portion of the content on our
              websites for commercial purposes without first obtaining a license
              or permission from us.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              DO NOT RELY ON INFORMATION ON THIS SITE
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Content provided through our websites is intended for general
              informational purposes only. It is not meant to serve as advice
              upon which you should base decisions. Prior to taking any action
              based on the content provided through this website, it is
              imperative to seek professional or specialist advice.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The content presented on our website may be modified without prior
              notice and may not necessarily originate from our company. While
              we make reasonable effort to regularly update and monitor the
              content on our websites, we do not make any representations,
              warranties, or guarantees, whether express or implied, that the
              content (including any published prices) is accurate, complete or
              up to date and we are not responsible for any typographical,
              technical, pricing, or descriptive errors.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In instances where the validity of any content on our platform is
              in doubt, please contact us at hello@avime.com.au.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Amendment of Terms:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We reserve the right to modify, alter, add, or remove sections of
              these Terms at any time. Prior to using our websites, it is
              advisable to regularly review these Terms to stay informed of any
              changes and the currently applicable Terms, which may differ from
              those presented here.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We will make every effort to bring to your attention any
              significant or substantial changes whenever feasible, but we do
              not commit to doing so. Our failure to highlight such changes will
              not affect the enforceability of the current applicable Terms.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              If you choose to use our Websites, then we will regard that use as
              conclusive evidence of your agreement and acceptance that these
              Terms govern your and AVIME rights and obligations to each other.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Privacy Policy:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              AVIME is dedicated to safeguarding the privacy of its clients,
              their clients, and our end users. We only use personal information
              as outlined in our Privacy Policy. For comprehensive details
              regarding our privacy management, please refer to our Privacy
              Policy accessible at https://avime.au/privacy-policy.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Access Code:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You acknowledge that the access code provided by AVIME is for your
              personal use only. This access code grants access to images and
              personal information and sharing it with others is strictly
              prohibited. AVIME will not be liable to you if you share the
              access code with a third party or otherwise allow access to the
              personal information associated with that unique identifying
              access code.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              If your access code expires and you wish to access personal
              information, you may request a new access code through the contact
              information provided above. However, issuance of a new access code
              is not guaranteed, and we may require various information,
              including identity documentation, before issuing a new access
              code.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Payment Terms:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              AVIME accepts cash and credit card payments. Major credit cards,
              including Visa and Mastercard, can be used for online orders via
              our ordering platforms.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Our operating models vary based on region or geography, resulting
              in pricing discrepancies for services depending on location and
              the services engaged by the school.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Please note that online payments may incur a credit card
              surcharge. Additionally, purchases made outside the designated
              ordering window are subject to an administration/handling fee.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Disclaimer:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              To the fullest extent permitted by law, AVIME disclaims all
              warranties, expressed or implied, including but not limited to
              implied warranties of merchantability and fitness for a particular
              purpose. AVIME does not warrant that documents, goods, or services
              will be error-free, or that defects will be corrected, or that our
              websites or servers are free of viruses or other harmful
              components.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              AVIME takes no responsibility for it&apos;s clients getting hurt
              on the photoshoot day.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              While we strive to maintain accurate, reliable, and up-to-date
              information on our website, we do not warrant or make
              representations regarding the use or outcome of using any
              document, product, service, link, or information on our website,
              including their correctness, suitability, accuracy, reliability or
              otherwise.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              It is solely your responsibility, not AVIME&apos;s, to bear any
              costs associated with servicing, repairs, or corrections. The laws
              of your state or territory may not allow these exclusions,
              particularly the exclusion of certain implied warranties. Some of
              the above may not apply to you but you must ensure you are aware
              of any risk you may be taking by using this Website or any
              products or services that may be offered through it. It is your
              responsibility to do so.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Limitations of Liability:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              By using our websites, you agree and accept that AVIME is not
              liable for any loss or damage resulting from your use of the
              websites. This includes errors or omissions in our documents or
              information, any goods or services we offer, or any other use of
              the website. Your reliance on information or materials on this
              website is entirely at your own risk, for which AVIME shall not be
              liable.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You are responsible for ensuring that any products, services, or
              information available through this website meet your specific
              requirements. You acknowledge that such information and materials
              may contain inaccuracies or errors, and AVIME expressly excludes
              liability for any such inaccuracies or errors to the fullest
              extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Competition and Consumer Act:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              For the purposes of Schedule 2 of the Australian Consumer Law, in
              particular Sections 51 to 53, 64 and 64A of Part 3-2, Division 1,
              Subdivision A of the Competition and Consumer Act 2010 (Cth),
              AVIME&apos;s liability for any breach of a term of this agreement
              is limited to: the supplying of the goods or services to you
              again; the replacement of the goods; or the payment of the cost of
              having the goods or services supplied to you again.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You must be over 18 years of age, or have the consent of your
              parent/guardian, to use our websites and to purchase any goods or
              services.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Refund Policy:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              If you are dissatisfied with our services, we offer two options:
            </p>
            <ul>
              <li>Contact AVIME to discuss your concerns.</li>
              <li>
                Return the product to AVIME within 14 days of delivery with a
                note explaining your dissatisfaction and your contact
                information. We will arrange a full refund after contacting you.
              </li>
            </ul>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Please note that this money-back guarantee does not extend to
              Digital Portrait downloads. Therefore, ensure your satisfaction
              with hard-copy prints before downloading your digital portrait.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Third-Party Providers:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Our websites list third-party associates. We do not share any
              personal information with these associates without your or your
              school&apos;s consent. It is your responsibility to inquire about
              the terms and conditions and privacy policies of each third-party
              partner and associate.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Links to Other Websites:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Links provided on our websites to other sites and resources by
              third parties are for informational purposes only. We are not
              responsible for any third-party-linked websites. We have no
              control over these websites and shall not be liable for any loss,
              cost, or damage incurred by accessing them. You agree to conduct
              your own inquiries about these websites and third parties, for
              which AVIME shall not be liable.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              Jurisdiction:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              These terms of use, their subject matter, and their formation are
              governed by Australian law. By using our websites, you submit to
              the jurisdiction of the courts of Queensland, Australia.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In the event of a dispute with AVIME or any of our
              representatives, please email hello@avime.com.au.
            </p>
          </section>

          <section>
            <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              General Terms:
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The failure of either you or us to exercise, in any way, any right
              herein shall not be deemed a waiver of any further rights
              hereunder.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              If any provision in these Terms and Conditions is found to be
              unenforceable or invalid, that provision will be limited or
              eliminated, to the minimum extent necessary, so that these Terms
              shall otherwise remain in full force and effect and enforceable.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You and AVIME acknowledge that these Terms and Conditions
              constitute the comprehensive and sole agreement defining the
              mutual understanding between you and AVIME and that it supersedes
              and cancels all previous written and oral agreements (excluding
              Client Agreements), communications, and other understandings
              relating to the subject matter of these Terms.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              No agency, partnership, joint venture, or employment relationship
              is established as a result of these Terms, and you do not have the
              authority to bind AVIME in any manner.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
