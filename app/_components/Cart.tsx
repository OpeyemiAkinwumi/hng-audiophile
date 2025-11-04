import Image from "next/image";
import Count from "./Count";
import Overlay from "./Overlay";
import Link from "next/link";

type CartItem = {
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export default function Cart({ showCart }: { showCart: () => void }) {
  const storedCart = localStorage.getItem("cart");

  const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function deleteCart() {
    localStorage.removeItem("cart");
  }

  // console.log(cart[0]);

  return (
    <>
      <Overlay showCart={showCart} />
      <aside className="absolute top-36 right-0 left-0 z-950 m-auto flex items-start justify-center md:right-[10%] md:justify-end">
        <div className="relative z-999 flex max-w-[377px] md:max-w-[1440px] flex-col items-start justify-start rounded-lg bg-white p-8">
          {cart && cart.length > 0 ? (
            <>
              {" "}
              <div className="flex w-full items-center justify-between">
                <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                  CART ({cart.length})
                </h2>
                <p
                  onClick={deleteCart}
                  className="cursor-pointer text-sm text-black/60 underline"
                >
                  Remove all
                </p>
              </div>
              <div className="my-8 flex w-full flex-col items-start justify-start gap-4">
                {cart.map((product) => (
                  <div
                    key={product.name}
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
                        <p className="mt-0.5 text-black/60">
                          $ {product.price}
                        </p>
                      </div>
                    </div>
                    <Count quantity={product.quantity} />
                  </div>
                ))}
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-sm text-black/60">TOTAL</p>
                <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                  $ {totalPrice}
                </h2>
              </div>
              <Link
                href="/checkout"
                className="bg-main hover:bg-main-light mt-10 flex w-full cursor-pointer items-center justify-center py-4 font-bold tracking-wider text-white transition-all duration-150"
              >
                CHECKOUT
              </Link>
            </>
          ) : (
            <p className="flex h-full w-full flex-col items-center justify-center gap-2 text-xs text-black/70">
              Empty Cart{" "}
              <span className="bg-main rounded-md px-3 py-1 text-sm font-medium text-white">
                Start Shopping now
              </span>
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
