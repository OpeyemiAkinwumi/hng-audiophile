import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmark } from "react-icons/io";

export default function CheckoutModal() {
  return (
    <>
      <main className="absolute top-0 left-0 z-950 flex h-full w-full cursor-pointer items-center justify-center bg-black/50"></main>

      <aside className="absolute top-36 z-999 h-[600px] w-[92%] max-w-[550px] rounded-lg bg-white p-12">
        <div className="bg-main flex h-16 w-16 items-center justify-center rounded-full text-white">
          <IoMdCheckmark size={32} />
        </div>

        <h2 className="mt-8 max-w-[70%] text-3xl leading-9 font-bold tracking-[1.14px]">
          THANK YOU FOR YOUR ORDER
        </h2>

        <p className="mt-6 text-sm text-black/60">
          You will receive an email confirmation shortly.
        </p>

        {/* OrderId component */}
        <div className="mt-8 flex h-36 w-full items-center justify-center overflow-hidden rounded-lg text-sm">
          <div className="bg-light flex h-full w-1/2 flex-col items-center justify-center gap-4 p-4">
            <div className="flex w-full items-center justify-between px-4 shadow-sm/10">
              <div className="flex items-center justify-start">
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

            <p className="text-xs text-black/60">and 2 other item(s)</p>
          </div>

          {/* dark side */}
          <div className="flex h-full w-1/2 flex-col items-start justify-center gap-2 bg-black p-10 text-white">
            <h3 className="text-sm text-white/30">GRAND TOTAL</h3>
            <p className="text-lg text-white">$ 5,446</p>
          </div>
        </div>

        <Link
          className="bg-main trac mt-12 flex w-full items-center justify-center py-4 font-bold text-white"
          href="/"
        >
          BACK TO HOME
        </Link>
      </aside>
    </>
  );
}
