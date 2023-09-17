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
      <div className="container">
        About Us - AVIME Photography Boutique Welcome to AVIME, where we're
        redefining the art of school photography. Our mission is simple yet
        bold: to change and elevate the school photography industry. Our slogan,
        "Elevating elegance, capturing legacy," encapsulates our commitment to
        transforming the way we preserve your most cherished memories.
        Identifying the Gap In an ever-evolving world, school photography had
        remained stagnant for over two decades. We saw a gap in the market, a
        disconnection between what parents deserved and what they were
        receiving. Despite paying a premium for their children's school photos,
        parents were often left with lackluster results—images that failed to
        capture the true essence of their child's journey through education. A
        Fresh Perspective AVIME was born from the belief that school photography
        should evolve with the times. Our team is young and vibrant, bringing a
        fresh perspective to an industry steeped in tradition. We understand
        what today's youth likes and wants, and we're passionate about using
        this knowledge to create school photos that are not only visually
        stunning but also meaningful. Quality Over Quantity At AVIME, we
        prioritize quality over quantity. We believe that each photograph should
        be a work of art, a testament to the individuality and spirit of the
        student. This commitment to quality sets us apart. We don't just take
        pictures; we capture moments that become part of your family's legacy. A
        Vision for the Future Our dedication to excellence is not just a
        short-term goal. We're here for the long haul. We envision a future
        where AVIME dominates the school photography market, setting a new
        standard for what parents can expect. By continually pushing the
        boundaries of creativity and service, we aim to make school photography
        an experience that delights and inspires. Our Promise When you choose
        AVIME, you're choosing a partner in preserving the precious memories of
        your child's educational journey. We promise to deliver photographs that
        are elegant, timeless, and filled with the spirit of your child's unique
        personality. We promise to provide the quality you deserve at a price
        that's fair. And above all, we promise to be the change that elevates
        school photography to new heights. Thank you for choosing AVIME, where
        we're not just capturing moments; we're creating legacies. Join us on
        this exciting journey of transformation, and let's make school
        photography an art form that truly reflects the beauty and essence of
        your child's academic adventure.
      </div>
    </>
  );
}
