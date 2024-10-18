import Link from "next/link";
import { Metadata } from "next/types";
import {
  PageHeader,
  PageHeaderProps,
} from "@/components/layout/templates/page-header";

const info: PageHeaderProps = {
  title: "Privacy Policy",
  description: "We encourage you to thoroughly review our privacy policy.",
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
        className="md:items-center md:text-center lg:pb-4"
      />
      <div className="container mb-12 grid max-w-3xl gap-4 py-8">
        <div className="grid gap-4 border-b pb-8">
          <section>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              This is the privacy policy of AVIME PTY LTD.(referred to as
              &ldquo;we&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We respect and protect the privacy of our customers. This privacy
              policy tells you how we collect and use information.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The term &ldquo;Personal Information&rdquo; in this privacy policy
              means any information from which your identity is apparent or can
              be reasonably ascertained.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We do not collect Personal Information about you if you are merely
              browsing our website.&nbsp;
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              By using&nbsp;
              <Link href="https://www.avime.com.au/">
                www.avime.com.au
              </Link>{" "}
              (&ldquo;our website&rdquo;), placing an order with us or providing
              your Personal Information to any of us you accept the terms of our
              Privacy Policy.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Personal Information provided by you to an AVIME will be shared
              with AVIME PTY LTD.. Personal Information provided by you to AVIME
              PTY LTD. will not be provided to an AVIME except in the following
              circumstances:
            </p>
            <ul>
              <li>To assist with dealing with order errors</li>
              <li>To assist with customer complaints</li>
              <li>To assist with any service related enquiries</li>
            </ul>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We may need to update our privacy policy from time to time as the
              law changes or as circumstances change. We will not notify you
              directly of any change. All changes will be updated on our website
              and other places that we display our privacy policy. You consent
              to any changes.
            </p>
          </section>
        </div>

        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            PERSONAL INFORMATION
          </h2>
          <p>
            If you contact us via email or through our website, we will collect
            the email address you nominate and any other identifying information
            you provide, such as a name, phone number and postal or residential
            address.
          </p>
          <p>Please do not give us information that we do not request.</p>
          <p>
            If you provide us with information about another person then you do
            so on the grounds that you are authorised to provide that Personal
            Information to us and you undertake to advise that person that their
            Personal Information has been provided to us within a reasonable
            time and you will refer them to this privacy policy.
          </p>
          <p>
            Other than circumstances such as unlawful activity or serious
            threats to life, health or safety, we will not share your Personal
            Information except in accordance with the terms of this privacy
            policy.
          </p>
        </section>

        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 1 &ndash; OPEN AND TRANSPARENT
            MANAGEMENT OF PERSONAL INFORMATION{" "}
          </h2>
          <p>
            1.1 The kinds of Personal Information that we may collect and hold
            includes, but is not limited to:
          </p>
          <p className="pl-12">
            (a) Full name of the student and/or the student&rsquo;s parent/s or
            guardian/s;
          </p>
          <p className="pl-12">(b) The year and role class of the student;</p>
          <p className="pl-12">(c) The school the student attends;</p>
          <p className="pl-12">(d) Student and/or library barcode numbers;</p>
          <p className="pl-12">(e) Postal and/or residential Address;</p>
          <p className="pl-12">(f) Telephone number;</p>
          <p className="pl-12">(g) Email address;</p>
          <p className="pl-12">(h) List of staff names at the school;</p>
          <p className="pl-12">(i) List of teacher names at the school;</p>
          <p className="pl-12">
            (j) The principal&rsquo;s and deputy principal&rsquo;s names;
          </p>
          <p className="pl-12">
            (k) Customer&rsquo;s credit card details (however note that we do
            not store any credit card details obtained through our website.
            Those details are passed onto our payment provider including but not
            limited to Stripe Payment Gateway{" "}
            <Link href="https://stripe.com">https://stripe.com</Link>)&nbsp;
          </p>
          <p>(l) Other details you provide to us.</p>
          <p>1.2 This Personal Information will be collected:</p>
          <p className="pl-12">
            (i) If you enter your details on our website;&nbsp;
          </p>
          <p className="pl-12">(ii) From a participating school;&nbsp;</p>
          <p className="pl-12">
            (iii) If you complete your details on a company order envelope and
            submit that to us;&nbsp;
          </p>
          <p className="pl-12">
            (iv) if you provide your details to us through other means.&nbsp;
          </p>
          <p>We hold your information as follows:</p>
          <p className="pl-12">
            (a) We retain the order envelopes for the purpose of filling your
            order
          </p>
          <p className="pl-12">
            (b) We retain a database of students, customers and parents and/or
            guardians which is maintained on AVIME PTY LTD.&rsquo;s database,
            which is hosted on the company&rsquo;s internal computer network
            within Australia.&nbsp;Access to the database is available only to
            staff of AVIME PTY LTD.&nbsp;
          </p>
          <p className="pl-12">
            (c) All AVIME Photography images are sent after capture to AVIME PTY
            LTD. secure dedicated production facility. There, the images are
            stored on servers where physical access is restricted to AVIME
            Photography staff and electronic access is controlled by industry
            standard authentication controls. The production facility network is
            protected from unauthorised outside access by&nbsp;enterprise grade
            firewalls and virus protection.&nbsp;The portrait download site is
            housed in this same facility. Access to the images is available only
            to staff of AVIME PTY LTD.&nbsp;
          </p>
          <p className="pl-12">
            (d) We will collect, hold, use and disclose Personal Information for
            the primary purpose of:
          </p>
          <p className="pl-12">
            (A) Fulfilling orders for photos and other products placed by the
            customer;&nbsp;
          </p>
          <p className="pl-12">(B) Completing order envelope details;</p>
          <p className="pl-12">(C) Service and order enquiries;</p>
          <p className="pl-12">(D) Product updates and offers.</p>
          <p>
            We may send you marketing information if you have consented to the
            receipt of that information.
          </p>
          <p>
            (e) If you believe we have breached the Australian Privacy
            Principles&nbsp;or a Registered PP Code (if any) that binds us, then
            you should make contact with AVIME PTY LTD. via&nbsp;
            <Link href="mailto:hello@avime.com.au">hello@avime.com.au</Link>
            .&nbsp;
          </p>
          <p>
            Upon receipt of a complaint, we will investigate that complaint and
            we will use our best endeavours to revert to you within 30
            days.&nbsp;If we form the view that a request or complaint will take
            longer to resolve than 30 days, then we will advise you of this and
            of the anticipated date.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Use of Third-Party Software and Access to Photos
          </h2>
          <p>
            We may use third-party software services to enhance and support the
            functionality of our application. These third-party services may, in
            certain instances, require access to your photos to provide
            specific features or services. Any access to your photos will only
            occur with your explicit consent and will be used solely for the
            purposes described when the access is requested. We ensure that our
            third-party partners adhere to the same high standards of privacy
            and data protection that we do, and your personal data, including
            your photos, will never be shared or used for purposes beyond the
            scope of the services provided.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 2 - ANONYMITY AND PSEUDONYMITY
          </h2>
          <p>
            (a) You have the option of not identifying yourself or of using a
            pseudonym when you deal with us in relation to a particular matter.
          </p>
          <p>
            (b) However, if you do not identify yourself or you use a pseudonym,
            then we will be unable to provide you with any photos or other
            products as it will be necessary to have certain details in order to
            complete any order. You accept that if you deal with us anonymously
            or using a pseudonym, that we may not be able to fulfil an order for
            you or provide any other functions or services.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 3 - COLLECTION OF SOLICITED PERSONAL
            INFORMATION
          </h2>
          <p>
            We will only collect Personal Information if it is reasonably
            necessary for one or more of our functions or activities and in
            particular if it is necessary to provide you with the photos or
            associated products or to take photos of the subject.
          </p>
          <p>
            The Personal Information we collect about you will be limited to the
            information that we need to undertake photography and/or to provide
            photos and/or associated products.
          </p>
          <p>
            We will not collect or require you to provide any sensitive
            information as that term is defined in the&nbsp;
            <em>Privacy Act 1988 Cth</em>.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 4 - DEALING WITH UNSOLICITED PERSONAL
            INFORMATION
          </h2>
          <p>
            We request that you do not provide us with any Personal Information
            which we do not request from you.
          </p>
          <p>
            If you do provide us with Personal Information we have not
            requested, we will, within a reasonable time, determine whether that
            information is reasonably necessary for one or more of our functions
            or activities.&nbsp;
          </p>
          <p>
            If we determine that we could not have collected the unsolicited
            information for the purposes of providing goods and services to you,
            then we will destroy the information as soon as possible or ensure
            that the information is de-identified.
          </p>
          <p>
            If the unsolicited information you provide to us is information we
            could have collected for the purpose of our functions or activities,
            then we will deal with the information as outlined in the remainder
            of this privacy policy.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 5 - NOTIFICATION OF THE COLLECTION OF
            PERSONAL INFORMATION
          </h2>
          <p>
            If we collect Personal Information about you and you have not
            provided that information to us, then we will take reasonable steps
            to ensure that you are notified that we hold that Personal
            Information. We will notify you:
          </p>
          <p className="pl-12">(a) Of our identity;&nbsp;</p>
          <p className="pl-12">
            (b) The circumstances of the collection of the information;
          </p>
          <p className="pl-12">
            (c) If the information is required or authorised under a law or
            court / tribunal order, then we will advise you that the collection
            is so required or authorised;
          </p>
          <p className="pl-12">
            (d) The purposes for which we have collected the Personal
            Information;
          </p>
          <p className="pl-12">
            (e) The consequences (if any) if the Personal Information is not
            collected by us;
          </p>
          <p className="pl-12">
            (f) Any other entity, body or person, or the types of entities,
            bodies or persons to which we would usually disclose Personal
            Information of the kind collected.
          </p>
          <p className="pl-12">
            (g) That our privacy policy contains information about how you can
            access the Personal Information that is held by us and to seek
            correction of that information;
          </p>
          <p className="pl-12">
            (h) That our policy contains information about how you complaint
            about a breach of the Australian Privacy Principals or a registered
            APP Code (if any) that binds us and how we will deal with such a
            complaint;&nbsp;
          </p>
          <p className="pl-12">
            (i) Whether we are likely to disclose the Personal Information to
            overseas recipients.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 6 - USE OR DISCLOSURE OF PERSONAL
            INFORMATION
          </h2>
          <p>
            If an entity holds personal information which was collected for a
            particular purpose then the entity must not use or disclose that
            information for another purpose unless:
          </p>
          <p>(i) the individual has consented; or</p>
          <p>
            (ii) the individual would reasonably expect the entity to use or
            disclose the information for the secondary purpose which needs to be
            related to the primary purpose.&rdquo;
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 7 - DIRECT MARKETING
          </h2>

          <p>
            We may use your Personal Information for direct marketing purposes.
          </p>
          <p>
            You can easily request that we stop direct marketing to you by
            requesting the cessation of direct marketing material through email
            to&nbsp;
            <Link href="mailto:hello@avime.com.au">hello@avime.com.au</Link>
            &nbsp;or by simply clicking the &ldquo;unsubscribe&rdquo; link in
            any email we send to you for direct marketing purposes. We will
            comply with such request within a reasonable time.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 8 - CROSS-BORDER DISCLOSURE OF PERSONAL
            INFORMATION
          </h2>
          <p>
            We are not likely to disclose personal information to overseas
            recipients&nbsp;
          </p>
          <p>
            However note that when you use our website we may use
            &ldquo;cookies&rdquo; which is a small text file that our site may
            place on your computer as a tool to remember your preferences. You
            can refuse to use &ldquo;cookies&rdquo; by selecting the appropriate
            settings on your browser, however if you do this you may not have
            the full functionality of our website.&nbsp;
          </p>
          <p>
            Our website may contain links to other websites. We are not
            responsible for the privacy practices of third parties or their
            websites. If you go to other websites from our website, we advise
            you to be aware of and read their privacy policy.
          </p>
          <p>
            Our website also uses Google analytics. This is a service which
            transmits website traffic data to Google services in the United
            States. It does not identify individual users or your IP
            address.&nbsp;However, by using our website you do consent to the
            processing of data about you by Google in the manner described in
            Google&rsquo;s privacy policy and for the purposes set out above.
            You can opt out of Google analytics if you disable or refuse the
            cookie, disable Java script, or use the opt-out service provided by
            Google.
          </p>
          <p>
            You acknowledge that no data transmission over the internet can be
            guaranteed to be secure. We do not warrant the security of
            information you to us online.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 9 - ADOPTION, USE OR DISCLOSURE OF
            GOVERNMENT RELATED IDENTIFIERS
          </h2>
          <p>We do not adopt Government related identifiers of individuals.</p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 10 - QUALITY OF PERSONAL INFORMATION
          </h2>

          <p>
            We only collect Personal Information which is provided to us by you.
            You should ensure that all information you provide is accurate,
            up-to-date and complete.
          </p>
          <p>
            You must advise us if the information becomes inaccurate, up-to-date
            or incomplete.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 11 - SECURITY OF PERSONAL INFORMATION
          </h2>

          <p>We store and secure your information as outlined above.</p>
          <p>We will hold your information indefinitely.&nbsp;</p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 12 - ACCESS TO PERSONAL INFORMATION
          </h2>
          <p>
            We will give you access to your Personal Information however we will
            not give you access if:
          </p>
          <p className="pl-12">
            (a) we form the reasonable view that giving access would pose a
            serious threat to the life, health or safety of any individual, or
            to public health or public safety; or&nbsp;
          </p>
          <p className="pl-12">
            (b) giving access could have a serious impact on the privacy of
            other individuals;&nbsp;
          </p>
          <p className="pl-12">
            (c) the request for access is frivolous or vexations;
          </p>
          <p className="pl-12">
            (d) the information relates to existing or anticipated legal
            proceedings between us and you and would not be accessible by the
            process of discovery in those proceedings;
          </p>
          <p className="pl-12">
            (e) giving access would reveal our intentions in relation to
            negotiations with the individual in such a way as to prejudice those
            negotiations;
          </p>
          <p className="pl-12">(f) giving access would be unlawful;</p>
          <p className="pl-12">
            (g) denying access is required or authorised by or under an
            Australian law or court/tribunal order;
          </p>
          <p className="pl-12">(h) both of the following apply:</p>
          <p className="pl-12">
            (i) we have reason to suspect that unlawful activity or misconduct
            of a serious nature that relates to our functions or activities has
            been, is being or may be engaged in;
          </p>
          <p className="pl-12">
            (ii) giving access would be likely to prejudice the taking of
            appropriate action in relation to the matter;
          </p>
          <p className="pl-12">
            (i) giving access would be likely to prejudice one or more
            enforcement related activities conducted by, or on behalf of, an
            enforcement body; or
          </p>
          <p className="pl-12">
            (j) giving access would reveal evaluative information generated by
            us in connection with a commercially sensitive decision-making
            process.
          </p>
          <p>
            If we do not give you access because of any of the above reasons we
            will advise you in writing:&nbsp;
          </p>
          <ul>
            <li>
              the mechanisms available to you to complain about the refusal;
            </li>
            <li>
              other matters we are required to advise you by regulation; and
            </li>
            <li>
              we will take steps to give you access to the Personal Information
              in a way which meets our respective needs (if possible).
            </li>
          </ul>
          <p>
            We will not charge for access to your Personal Information except if
            the Personal Information is photographic in nature in which event we
            will charge our usual charge.
          </p>
        </section>
        <section>
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            AUSTRALIAN PRIVACY PRINCIPLE 13 - CORRECTION OF PERSONAL INFORMATION
          </h2>

          <p>
            You can access personal information that we hold about you and we
            will correct that information upon your advice that it is
            inaccurate, incomplete, misleading or not-up-date.
          </p>
          <p>
            You can contact&nbsp;{" "}
            <Link href="mailto:hello@avime.com.au">hello@avime.com.au</Link>
            &nbsp;for the above purposes.
          </p>
          <p>
            You will be required to provide proof of identity before any
            information is shared with you.&nbsp;
          </p>
          <p>
            Once we are satisfied as to your identity, we will make changes to
            the Personal Information held about you in writing.
          </p>
          <p>
            We will advise any other entity to whom we have disclosed your
            information of the change within a reasonable time.&nbsp;
          </p>
          <p>
            If we refuse to correct your information then we will advise you in
            writing of the following:
          </p>
          <p>(a) the reasons for the refusal;</p>
          <p>(b) the mechanisms available to complain about the refusal; and</p>
          <p>(c) any other matters required by regulations.</p>
          <p>
            If we refuse to correct your information and you request us to
            associate with the information a statement that the information is
            inaccurate, out-of-date or incomplete, irrelevant or misleading then
            we will take reasonable steps to make that statement apparent to
            users of the information.
          </p>
        </section>
      </div>
    </>
  );
}
