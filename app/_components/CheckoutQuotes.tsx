"use client";

import CheckoutForm from "./CheckoutForm";
import Image from "next/image";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { OrderFormData } from "./OrderFormData";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function CheckoutQuotes() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState<OrderFormData | null>(null);

  const createOrder = useMutation(api.orders.createOrder);

  if (typeof window === "undefined") return []; // ⛔️ Avoid SSR issues in Next.js

  const storedCart = localStorage.getItem("cart");

  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const VAT = Math.round((10 / 100) * totalPrice);

  function showOrderModal() {
    setShowModal((modal) => !modal);
  }

  const tax = 100;
  const shipping = 1000;

  const grandTotal = totalPrice + VAT + 50;

  

  async function handleCheckout() {
    console.log(formData);
    console.log("hello");
    if (!formData) return;

    const finalOrder: OrderFormData = {
      ...formData,
      items: cart.map((item, index) => ({
        id: String(index),
        name: item.name,
        price: Math.round(item.price),
        quantity: item.quantity,
      })),
      totals: {
        subtotal: Math.round(totalPrice),
        shipping: Math.round(shipping),
        taxes: Math.round(tax),
        grandTotal: Math.round(grandTotal),
      },
      status: "processing",
    };

    const result = await createOrder(finalOrder);

    if (result) {
      showOrderModal();
      localStorage.clear();
      console.log(result);

      //  resend api library function here
    }
    // console.log("✅ Order created with ID:", result.orderId);
  }

  return (
    <>
      <main className="mx-auto mt-32 grid w-[92%] max-w-[1440px] grid-cols-1 gap-8 md:w-4/5 lg:grid-cols-[2fr_1fr]">
        <div className="w-full rounded-lg bg-white px-12 py-14">
          <h2 className="text-3xl font-bold tracking-[1.14px] text-black">
            CHECKOUT
          </h2>

          <CheckoutForm setFormData={setFormData} />
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
                $ {shipping}
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
              onClick={handleCheckout}
              className="bg-main hover:bg-main-light mt-10 flex w-full cursor-pointer items-center justify-center py-4 font-bold tracking-wider text-white transition-all duration-150"
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </main>

      {showModal && <CheckoutModal grandTotal={grandTotal} />}
    </>
  );
}
