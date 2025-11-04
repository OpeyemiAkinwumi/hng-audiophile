"use client";

import { useState } from "react";

type CartItem = {
  name: string;
  image: string;
  price: number | undefined;
  quantity: number;
};

export default function Counter({
  name,
  image,
  price,
}: {
  name: string;
  image: string;
  price: number | undefined;
}) {
  const [count, setCount] = useState<number>(1);

  // function addToCart() {
  //   // Get existing cart from localStorage (if any)
  //   const storedCart = localStorage.getItem("cart");
  //   // const cartItems = storedCart ? JSON.parse(storedCart) : [];
  //   const cartItems: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  //   // Check if item already exists in cart
  //   const existingItemIndex = cartItems.findIndex((item) => item.name === name);

  //   if (existingItemIndex !== -1) {
  //     // If exists, increase quantity
  //     cartItems[existingItemIndex].quantity += 1;
  //   } else {
  //     // Otherwise, add as new item
  //     cartItems.push({
  //       name,
  //       image,
  //       price,
  //       quantity: 1,
  //       // slug, // optional — useful for identifying items
  //     });
  //   }

  //   // Save updated cart back to localStorage
  //   localStorage.setItem("cart", JSON.stringify(cartItems));

  //   console.log("✅ Item added to cart:", cartItems);
  // }

  function addToCart(
    name: string,
    image: string,
    price: number | undefined,
    quantity: number = 1,
  ) {
    // Get existing cart from localStorage (if any)
    const storedCart = localStorage.getItem("cart");
    const cartItems: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex((item) => item.name === name);

    if (existingItemIndex !== -1) {
      // ✅ If exists, update quantity (add or overwrite)
      cartItems[existingItemIndex].quantity += quantity;

      // If you prefer to *replace* instead of add:
      // cartItems[existingItemIndex].quantity = quantity;
    } else {
      // ✅ Otherwise, add new item
      cartItems.push({
        name,
        image,
        price,
        quantity,
      });
    }

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    console.log("✅ Cart updated:", cartItems);
  }

  return (
    <div className="mt-[47px] flex items-center justify-start gap-4 text-sm">
      <div className="bg-light px flex items-center justify-center gap-5 p-4 font-medium text-black/50 lg:w-[120px]">
        <span
          className="cursor-pointer"
          onClick={() => setCount((num) => num - 1)}
        >
          -
        </span>
        <span className="font-bold text-black">{count}</span>
        <span
          className="cursor-pointer"
          onClick={() => setCount((num) => num + 1)}
        >
          +
        </span>
      </div>
      <button
        onClick={() => addToCart(name, image, price, count)}
        className="bg-main cursor-pointer px-8 py-4 text-sm font-bold text-white"
      >
        ADD TO CART
      </button>
    </div>
  );
}
