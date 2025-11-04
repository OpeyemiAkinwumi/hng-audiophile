import { ReactNode } from "react";
// import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

import "./globals.css";

import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

// console.log(manrope);

type LayoutProp = {
  children: ReactNode;
};

export const metadata = {
  title: {
    template: "%s | Audiophile",
    default: "Welcome | Audiophile Shop",
  },
  description:
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
};

export default function RootLayout({ children }: LayoutProp) {
  return (
    <html lang="en">
      <body
        className={`w-full ${manrope.className} relative flex flex-col items-center justify-start`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
