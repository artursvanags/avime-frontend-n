import Image from "next/image";

export default function AboutUs({ text }: any) {
  return (
    <>
      <section
        id="about-us"
        className="container border-t py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3 pb-6 leading-normal sm:text-xl sm:leading-8">
            <p>
              Hey There!
              <br />
              <br />
              Thanks a lot for your curiosity in getting to know us a bit
              better.
              <br />
              <br />
              Sure, we could bore you with a list of credentials, boasting about
              our over a decade long photography experience and the fancy
              cameras we use, but let&apos;s be real—does all that jazz really
              matter? Not so much!
              <br />
              <br />
              The most important question is:
              <span className="font-extrabold">
                Why would you choose AVIME for your school photography needs?
              </span>
              And the answer is super simple - because, as our slogan says,
              &lsquo;Elevating elegance, capturing legacy,&rsquo; we mean it!
              <br />
              <br />
              School photography seems like it&rsquo;s been caught in a
              &lsquo;90s time warp, doesn&rsquo;t it? Those unappealing
              &quot;blue, cloudy&quot; backgrounds and extra photos crammed into
              your package just to bulk it up, keychains that scratch, the bent
              corners on those bookmarks… Yuck! It&rsquo;s time to say goodbye
              to the old and in with the new! Don&rsquo;t get us wrong. We are
              still keeping the tradition to have your headshot taken every
              year, but we thought, why not give it a shot and shake things up!
              <br />
              <br />
              We began with the most important question: What do the parents and
              kids truly want?
              <br />
              <br />
            </p>
          </div>

          <Image
            src="/about-us/image.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="order-first w-full rounded lg:order-last"
          />
        </div>

        <div className="pb-6 leading-normal sm:text-xl sm:leading-8">
          <div className="pb-6 font-extrabold">To start off - Quality.</div>
          Precision in lighting to complement every skin tone, a background that
          resonates with modern standards, and a careful eye for details like
          untangled shirts, well-groomed hair, and eyes free from squints.
          It&apos;s all about delivering excellence.
          <br />
          <br />
          <div className="pb-6 font-extrabold">
            Taking a new approach - Modernising the outdated.
          </div>
          Reinventing the products in our packages was a big one! We wanted to
          make sure that we aren&apos;t selling you low-quality items just for
          the sake of making a sale. Our goal is and will be to offer products
          that you would actually be able to use in the real world, rather than
          having them collect dust in the cupboard or above the fridge, or
          making you feel embarrassed when showcasing them to your neighbor when
          they come over for a vegemite scroll.
          <br />
          <br />
          When purchasing our school booklet, you will receive a booklet with a
          warm welcome from your school principal, a photo of your school, and
          shots of you and all your classmates. It&apos;s like an appetizer at a
          restaurant - it tastes great but won&apos;t fill you up. Level up to
          our &lsquo;Artist in the Making&rsquo; package, which includes the
          school booklet, two 5x7 photos (one for each grandparent to frame),
          and four wallet photos for Mum and Dad to keep with them at all times!
          In our &lsquo;Garage Band Vocalist&rsquo; package, we&apos;ve added an
          8x10 photo for you to proudly display on your own wall. And if
          you&apos;re ready to fully embrace the photography experience,
          definitely check out our &lsquo;Rockstar&rsquo; package that includes
          everything mentioned above and adds extra 2x 4x6 photos as well as a
          what we call a &ldquo;learning set&rdquo; - Bookmark and calendar.
        </div>
      </section>
    </>
  );
}
