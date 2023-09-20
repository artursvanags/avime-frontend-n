import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type CardProp = {
  src: string;
  children: React.ReactNode;
};

function Card({ src, children }: CardProp) {
  return (
    <div className="rounded border bg-stone-50 p-4 dark:bg-transparent">
      <div className="space-y-2">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={src}
            loading="lazy"
            fill
            className="rounded-md object-cover"
            alt="Image"
          />
        </AspectRatio>
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="border-t py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="container">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Setting a New Standard in School Photography!
        </h2>
        <p className="max-w-[42rem] pt-2 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We make it perfect in every photo
        </p>
        <div className="mx-auto grid grid-cols-1 justify-center gap-4 py-8 sm:grid-cols-3">
          <Card src="https://images.unsplash.com/photo-1552666262-1f35b9080e83">
            <h3 className="pt-2 text-xl font-bold">100% Quality</h3>
            <p className="text-sm text-muted-foreground">
              We take quality seriously! The products, photos, and service we
              deliver is top tier. Our priority is making sure that we deliver
              the results you expect!
            </p>
          </Card>
          <Card src="https://images.unsplash.com/photo-1602595688238-9fffe12d5af3">
            <h3 className="pt-2 text-xl font-bold">Modern</h3>
            <p className="text-sm text-muted-foreground">
              We have researched and researched and researched again what
              parents and their children would like from school photos and we
              listened.
            </p>
          </Card>
          <Card src="https://images.unsplash.com/photo-1538448728514-b19826b97c9c">
            <h3 className="pt-2 text-xl font-bold">Affordable</h3>
            <p className="text-sm text-muted-foreground">
              Quality doesnt have to be out of reach. We have made sure that
              all of our products are qualitative without increasing the pricing
              dramatically. We have options for everyone.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
