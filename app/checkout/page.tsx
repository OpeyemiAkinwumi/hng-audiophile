import GoBackButton from "../_components/GoBackButton";
import Navbar from "../_components/Navbar";

import CheckoutQuotes from "../_components/CheckoutQuotes";

export default function page() {
  return (
    <>
      <Navbar />

      <div className="absolute top-40 flex w-[92%] max-w-[1440px] items-center justify-start text-sm font-medium text-black/70 md:w-4/5">
        <GoBackButton />
      </div>
      <section className="absolute top-0 left-0 -z-10 flex h-full w-full cursor-pointer items-center justify-center bg-black/10"></section>

      <CheckoutQuotes />

      {/* <main className="mx-auto mt-32 grid w-[92%] max-w-[1440px] grid-cols-1 gap-8 md:w-4/5 lg:grid-cols-[2fr_1fr]">
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
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-4">
                  <div className="bg-light flex h-16 w-16 items-center justify-center overflow-hidden rounded-md">
                    <Image
                      className="hidden lg:block"
                      src="/images/black headphone.png"
                      width={36.19}
                      height={40}
                      alt="Product Image"
                    />
                    <Image
                      className="block lg:hidden"
                      src="/images/black headphone.png"
                      width={36.19}
                      height={40}
                      alt="Product Image"
                    />
                  </div>
                  <div className="text-sm font-bold text-black">
                    <h4 className="">XX99 MK ii</h4>
                    <p className="mt-0.5 text-black/60">$ 2,999</p>
                  </div>
                </div>
                <p className="text-left text-black/70">x1</p>
              </div>
            </div>

            <div className="mb-2 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">TOTAL</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ 5,396
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
                $ 1,079
              </h2>
            </div>
            <div className="mt-6 flex w-full items-center justify-between">
              <p className="text-sm text-black/60">GRAND TOTAL</p>
              <h2 className="text-lg font-bold tracking-[1.29px] text-black">
                $ 5,446
              </h2>
            </div>

            <Link
              href="/checkout"
              className="bg-main hover:bg-main-light mt-10 flex w-full cursor-pointer items-center justify-center py-4 font-bold tracking-wider text-white transition-all duration-150"
            >
              CONTINUE & PAY
            </Link>
          </div>
        </div>
      </main> */}
    </>
  );
}
