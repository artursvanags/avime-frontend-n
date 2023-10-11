"use client";

import Image from "next/image";

import Grid from "@/components/global/grid";
import { SpaceObjectProps } from "@/types/space";
import Link from "next/link";


interface ImageProps {
  src: SpaceObjectProps;
}
export default function ImageCard({ src }: ImageProps) {
  return (
    <Grid.Item key={src.Key}>
      <div className="aspect-square">
        <Link href={src.presignedUrl} download="file" target="_blank">
          <Image
            src={src.presignedUrl || "/default-image.jpg"}
            width={420}
            height={420}
            priority
            className="h-full w-full rounded object-cover bg-gray-200"
            alt={src.Key || "Undefined"}
          />
        </Link>{" "}
      </div>
    </Grid.Item>
  );
}
