import Image from "next/image";

type CardProp = {
    img: string;
    t: string;
    price?: string;
  };
  
export function ProductCard({img, t, price }: CardProp) {
    return (
      <div className="rounded border bg-stone-50 p-4 dark:bg-transparent">
        <div className="space-y-2">
            <Image
              src={img}
              loading="lazy"
              fill
              className="rounded-md object-cover"
              alt="Image"
            />
          {t}
          {price}
        </div>
      </div>
    );
  }
  