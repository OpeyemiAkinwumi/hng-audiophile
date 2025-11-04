"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import GridCard from "./GridCard";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Navbar() {
  const [displayCart, setDisplayCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const
  const pathname = usePathname();
  // const isActive = pathname === href;

  function showCart() {
    setDisplayCart((cart) => !cart);
  }

  function showDrop() {
    setShowDropdown((drop) => !drop);
  }

  // const storedCart = localStorage.getItem("cart");

  // const cart = storedCart ? JSON.parse(storedCart) : [];
  // // console.log(cart?.length);

  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Listen for cart updates
  useEffect(() => {
    const handleStorageChange = () => {
      const storedCart = localStorage.getItem("cart");
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };

    // Listen for custom cart update events
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  return (
    <>
      <nav className="relative z-999 flex h-24 w-full items-center justify-center bg-black">
        <div className="flex w-[92%] items-center justify-between lg:w-4/5">
          <Image
            onClick={showDrop}
            className="block cursor-pointer lg:hidden"
            src="/images/hamburger.svg"
            width={16}
            height={15}
            alt="Audiophile Logo"
          />
          <Link className="text-white" href="/">
            <Image
              src="/images/logo.png"
              width="143"
              height={25}
              alt="Audiophile Logo"
            />
          </Link>
          <ul className="hidden items-center justify-center gap-[34px] text-sm font-medium tracking-[2px] lg:flex">
            <li>
              <Link
                className={`${pathname === "/" ? "text-main" : "text-white"} `}
                href="/"
              >
                HOME
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`${pathname === "/headphones" ? "text-main" : "text-white"} `}
                href="/headphones"
              >
                HEADPHONE
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`${pathname === "/speakers" ? "text-main" : "text-white"} `}
                href="/speakers"
              >
                SPEAKERS
              </Link>{" "}
            </li>
            <li>
              <Link
                className={`${pathname === "/earphones" ? "text-main" : "text-white"} `}
                href="/earphones"
              >
                EARPHONES
              </Link>{" "}
            </li>
          </ul>

          <div className="relative">
            <Image
              onClick={showCart}
              className="cursor-pointer"
              src="/images/cart logo.svg"
              width={23.33}
              height={25}
              alt="Audiophile Logo"
            />
            {cart &&
              (cart.length <= 0 ? (
                ""
              ) : (
                <span className="bg-main absolute top-[-15px] -right-2.5 rounded-full px-2 py-1 text-xs font-bold text-white">
                  {cart.length}
                </span>
              ))}
          </div>
        </div>
      </nav>

      {displayCart && <Cart showCart={showCart} />}

      {/* Dropdown */}

      <div
        className={`absolute ${showDropdown ? "mt-0" : "mt-[-500%]"} top-32 z-700 w-full border-b-10 border-black bg-white text-black transition-all duration-1000 lg:hidden`}
      >
        <GridCard />
      </div>

      {/* Overlay */}
      {/* <div
        className={`absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center bg-black/50 ${showDropdown ? "mt-0" : "mt-[200%]"}`}
      ></div> */}
    </>
  );
}
