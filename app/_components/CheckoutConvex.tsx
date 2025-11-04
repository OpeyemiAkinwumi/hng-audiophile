"use client";

import GoBackButton from "./GoBackButton";
import CheckoutQuotes from "./CheckoutQuotes";
import { ConvexProvider, ConvexReactClient } from "convex/react";

export default function CheckoutConvex() {
  const convex = new ConvexReactClient(
    "https://compassionate-chihuahua-362.convex.cloud",
  );
  return (
    <>
      <div className="absolute top-40 flex w-[92%] max-w-[1440px] items-center justify-start text-sm font-medium text-black/70 md:w-4/5">
        <GoBackButton />
      </div>
      <section className="absolute top-0 left-0 -z-10 flex h-full w-full cursor-pointer items-center justify-center bg-black/10"></section>

      <ConvexProvider client={convex}>
        <CheckoutQuotes />
      </ConvexProvider>
    </>
  );
}
