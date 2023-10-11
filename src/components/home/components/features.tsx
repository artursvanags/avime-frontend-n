"use client";

import Image from "next/image";
import Grid from "@/components/global/grid";
import Link from "next/link";
import { FeatureItems } from "@/types";
import { FeatureItemsConfig } from "@/config/site";

interface ImageProps {
  data: FeatureItems[];
}

function ImageCard({ data }: ImageProps) {
  return (
    <>
      {data.map((data, index) => (
        <Grid.Item
          key={index}
          className="relative inline-block h-full w-full rounded border bg-stone-50 p-4 dark:bg-transparent"
        >
          <div className="h-[220px] w-full">
            <Image
              src={data.src || "/default-image.jpg"}
              width={420}
              height={420}
              className="h-full w-full bg-gray-200 object-cover"
              alt={data.title || "Undefined"}
            />
          </div>
          <h3 className="pb-1 pt-2 text-xl font-bold">{data.title}</h3>
          <p className="text-sm text-muted-foreground">{data.description}</p>
        </Grid.Item>
      ))}
    </>
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
        <Grid className=" grid-cols-1 pt-4 sm:grid-cols-1 lg:grid-cols-3">
          <ImageCard data={FeatureItemsConfig} />
        </Grid>
      </div>
    </section>
  );
}
