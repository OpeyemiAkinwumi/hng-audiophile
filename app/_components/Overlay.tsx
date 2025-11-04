"use client";

export default function Overlay({ showCart }: { showCart: () => void }) {
  return (
    <main
      onClick={showCart}
      className="absolute top-0 left-0 z-950 flex h-screen w-full cursor-pointer items-center justify-center bg-black/50"
    ></main>
  );
}
