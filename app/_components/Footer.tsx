// "use client";

import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  // const pathname = usePathname();

  return (
    <footer className="text-light relative mt-[120px] flex w-full max-w-[1440px] flex-col items-center justify-center bg-black py-6 md:h-[365px]">
      <div className="bg-main absolute top-0 left-4 h-1 w-[101px] md:left-[10%]"></div>
      <div className="w-[92%] py-[60px] md:w-4/5">
        <div className="flex w-full flex-col items-center justify-between gap-8 md:items-start lg:flex-row lg:items-center">
          <Link className="text-white" href="/">
            <Image
              src="/images/logo.png"
              width="143"
              height={25}
              alt="Audiophile Logo"
            />
          </Link>

          <ul className="flex flex-col items-center justify-center gap-10 text-center text-xs font-medium tracking-[2px] md:flex-row md:gap-[34px]">
            <li>
              <Link className="hover:text-main text-white" href="/">
                HOME
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-main text-white" href="/headphones">
                HEADPHONE
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-main text-white" href="/speakers">
                SPEAKERS
              </Link>{" "}
            </li>
            <li>
              <Link className="hover:text-main text-white" href="/earphones">
                EARPHONES
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="text-light/50 flex w-[92%] flex-col items-center gap-8 text-center text-xs md:w-4/5 md:flex-row md:justify-baseline md:text-left lg:justify-between">
        <div className="flex max-w-[350px] flex-col items-center justify-start text-sm leading-6 md:max-w-[540px] md:items-start">
          <p className="mb-12">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>

          <p>Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="flex items-center justify-end gap-4 text-xl">
          <Link className="hover:text-main" href="">
            <FaFacebookSquare />
          </Link>
          <Link className="hover:text-main" href="">
            <FaTwitter />
          </Link>
          <Link className="hover:text-main" href="">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}
