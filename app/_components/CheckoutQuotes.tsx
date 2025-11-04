"use client";

import CheckoutForm from "./CheckoutForm";
import Image from "next/image";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CheckoutQuotes() {
  const [showModal, setShowModal] = useState(false);

  const storedCart = localStorage.getItem("cart");

  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const VAT = Math.round((10 / 100) * totalPrice);
  function showOrderModal() {
    setShowModal((modal) => !modal);
    console.log("Hello");
  }

  const grandTotal = totalPrice + VAT + 50;
  return (
    <>
      <main className="mx-auto mt-32 grid w-[92%] max-w-[1440px] grid-cols-1 gap-8 md:w-4/5 lg:grid-cols-[2fr_1fr]">
        <div className="w-full rounded-lg bg-white px-12 py-14">
          <h2 className="text-3xl font-bold tracking-[1.14px] text-black">
            CHECKOUT
          </h2>

          <CheckoutForm />
        </div>

        <div className="w-full">
          <div className="w-full rounded-lg bg-white p-8">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                SUMMARY
              </h2>
            </div>

            <div className="my-8 flex w-full flex-col items-start justify-start gap-4">
              {cart.map((product, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center justify-start gap-4">
                    <div className="bg-light flex h-16 w-16 items-center justify-center overflow-hidden rounded-md">
                      <Image
                        className="hidden lg:block"
                        src={product.image}
                        width={36.19}
                        height={40}
                        alt="Product Image"
                      />
                      <Image
                        className="block lg:hidden"
                        src={product.image}
                        width={36.19}
                        height={40}
                        alt="Product Image"
                      />
                    </div>
                    <div className="text-sm font-bold text-black">
                      <h4 className="">{product.name}</h4>
                      <p className="mt-0.5 text-black/60">$ {product.price}</p>
                    </div>
                  </div>
                  <p className="text-left text-black/70">x{product.quantity}</p>
                </div>
              ))}
            </div>

            <div className="mb-2 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">TOTAL</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ {totalPrice}
              </h2>
            </div>
            <div className="mb-2 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">SHIPPING</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ 50
              </h2>
            </div>
            <div className="mb-2 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">VAT(INCLUDED)</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ {VAT}
              </h2>
            </div>
            <div className="mt-6 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">GRAND TOTAL</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ {grandTotal}
              </h2>
            </div>

            <button
              onClick={showOrderModal}
              className="bg-main hover:bg-main-light mt-10 flex w-full cursor-pointer items-center justify-center py-4 font-bold tracking-wider text-white transition-all duration-150"
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </main>

      {showModal && <CheckoutModal />}
    </>
  );
}
