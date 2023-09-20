import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="border-t py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="container grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <p className="pb-6 font-medium leading-normal sm:text-xl sm:leading-8">
            AVIME Photography Boutique Welcome to AVIME&lsquo; where we&apos;re redefining
            the art of school photography.
          </p>
          <p className="leading-normal sm:text-xl sm:leading-8">
            Identifying the Gap In an ever-evolving world&lsquo; school photography
            had remained stagnant for over two decades. We saw a gap in the
            market&lsquo; a disconnection between what parents deserved and what they
            were receiving.
          </p>
          <p className="leading-normal sm:text-xl sm:leading-8">
            Despite paying a premium for their children&apos;s school photos&lsquo; parents
            were often left with lackluster results—images that failed to
            capture the true essence of their child&apos;s journey through education.
          </p>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1603900507965-da2de7cd709c"
          width={500}
          height={500}
          alt="Picture of the author"
          className="rounded"
        />
      </div>
    </section>
  );
}
