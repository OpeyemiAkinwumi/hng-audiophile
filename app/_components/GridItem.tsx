"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type GridItemProp = {
  src: string;
  //   width: number;
  //   height: number;
  alt: string;
  title: string;
  slug: string;
};

export default function GridItem({
  src,
  slug,

  alt,
  title,
}: GridItemProp) {
  const [isActive, setIsActive] = useState(false);

  function handleHover() {
    if (!isActive) setIsActive((act) => !act);
  }
  function handleOut() {
    if (isActive) setIsActive((act) => !act);
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseOut={handleOut}
      className="bg-light relative flex h-[210px] w-full flex-col items-center justify-center rounded-lg py-[25px] md:h-[165px] md:py-3 lg:h-[204px] lg:py-[30px]"
    >
      <Image
        src={src}
        className="absolute right-0 left-0 m-auto hidden md:top-[-45%] md:block lg:top-[-40%]"
        width={122.95}
        height={160}
        alt={alt}
      />
      <Image
        src={src}
        className="absolute top-[-20%] right-0 left-0 m-auto block md:top-[-45%] md:hidden lg:top-[-40%]"
        width={79.92}
        height={104}
        alt={alt}
      />

      {/* <!-- Shadow under the image --> */}
      <div className="absolute inset-x-0 top-[50px] mx-auto h-8 w-32 rounded-full bg-black/30 blur-lg"></div>

      <h2 className="mt-auto mb-4 text-xl font-bold tracking-[1.29px] sm:mb-0.5 sm:text-base lg:mb-2.5 lg:text-lg">
        {title}
      </h2>
      <Link
        href={`/${slug}`}
        className={` ${
          isActive ? "text-main" : "text-black/20"
        } flex items-center justify-center gap-3 text-sm font-semibold`}
      >
        SHOP <span className="text-main text-2xl">&gt;</span>
      </Link>
    </div>
  );
}
