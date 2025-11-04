import Image from "next/image";
// import React, { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";

type ProductCardProp = {
  image: string;
  title: string;
  description: string;
  swipe?: boolean;
  cart?: boolean;
  price?: number;
  slug: string;
};
// "/images/product headphone large.png"
export default function ProductCard({
  image,
  title,
  description,
  swipe = false,
  cart = false,
  price,
  slug,
}: ProductCardProp) {


  return (
    <section
      className={`mt-16 flex w-[92%] max-w-[1440px] flex-col items-center justify-between gap-14 md:mt-40 md:w-4/5 ${swipe ? "lg:flex-row-reverse" : "lg:flex-row"} `}
    >
      <div className="bg-light flex h-[352px] w-full items-center justify-center lg:h-[560px] lg:w-[540px]">
        <Image
          className="hidden lg:block"
          src={image}
          width={349.24}
          height={386}
          alt="Product Image"
        />
        <Image
          className="block lg:hidden"
          src={image}
          width={220}
          height={243}
          alt="Product Image"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center text-black md:pl-5 lg:w-1/2 lg:items-start lg:text-left">
        <p className="text-main text-sm font-medium tracking-[10px]">
          NEW PRODUCT
        </p>
        <h1 className="my-6 max-w-[350px] text-[36px] leading-10 font-bold tracking-[2px] md:text-5xl md:leading-10 lg:max-w-[450px] lg:text-6xl lg:leading-14">
          {title}
        </h1>
        <p className="max-w-[572px] text-sm leading-6 font-medium text-black/40 lg:max-w-[450px]">
          {description}
        </p>
        {!cart ? (
          <Button slug={slug} />
        ) : (
          <>
            <h3 className="mt-8 text-lg font-bold tracking-[1.29px]">
              $ {price}
            </h3>
            <Counter name={title} image={image} price={price} />{" "}
          </>
        )}
      </div>
    </section>
  );
}
