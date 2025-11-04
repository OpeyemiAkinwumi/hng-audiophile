// import Image from "next/image";

// import Link from "next/link";
import Navbar from "./_components/Navbar";
import GridCard from "./_components/GridCard";
import Image from "next/image";
import DarkButton from "./_components/DarkButton";
import Button from "./_components/Button";
// import Link from "next/link";
import ButtonBorder from "./_components/ButtonBorder";
import AudioGear from "./_components/AudioGear";

// import Navbar from "./_components/Navbar";
// lg:bg-[url('images/header-desk.png')]

export default function Page() {
  return (
    <>
      <header
        id="hero"
        className="text-lighter flex h-[600px] w-full max-w-[1440px] flex-col items-start justify-start bg-center object-cover sm:h-[729px]"
      >
        <Navbar />
        <div className="mx-auto mt-auto flex h-[85%] w-[92%] flex-col items-center justify-center text-center lg:h-[85%] lg:w-4/5 lg:items-start lg:text-left">
          <p className="text-sm font-medium tracking-[10px] text-white/50">
            NEW PRODUCT
          </p>
          <h1 className="my-6 text-[36px] leading-10 font-bold tracking-[2px] md:leading-14 lg:text-6xl">
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className="max-w-[250px] text-sm leading-6 font-medium text-white/60 lg:max-w-[328px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button slug="xx99-mark-two-headphones" />
        </div>
      </header>

      {/* Section  II */}
      <GridCard />

      {/* Section III */}

      <section className="bg-main text-light relative mx-auto flex h-[600px] w-[92%] max-w-[1440px] flex-col items-center justify-center gap-10 overflow-hidden md:h-[720px] md:w-4/5 lg:h-[560px] lg:flex-row lg:justify-end">
        <Image
          src="/images/speakers-large.png"
          className="absolute bottom-0 left-[117.49px] z-50 hidden lg:block"
          width={410.23}
          height={493}
          alt=""
        />
        <Image
          src="/images/speakers-large.png"
          className="hidden md:block lg:hidden"
          width={197.21}
          height={237}
          alt=""
        />
        <Image
          src="/images/speakers-large.png"
          className="block md:hidden"
          width={172.25}
          height={107}
          alt=""
        />
        <Image
          src="/images/radial.png"
          className="absolute top-0 right-0 left-0 m-auto hidden md:block lg:top-[30%] lg:bottom-[-30%] lg:left-[-5%]"
          width={994}
          height={994}
          alt=""
        />
        <Image
          src="/images/radial.png"
          className="absolute top-0 block md:hidden lg:top-[30%] lg:bottom-[-30%] lg:left-[-5%]"
          width={320}
          height={320}
          alt=""
        />

        <div className="flex w-[349px] flex-col items-center justify-start text-center lg:items-start lg:text-left">
          <h1 className="my-6 text-[36px] leading-12 tracking-[2px] md:leading-14 lg:text-6xl">
            ZX9 <br />
            SPEAKER
          </h1>
          <p className="max-w-[250px] text-sm leading-6 font-medium text-white/60 lg:max-w-[328px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <DarkButton slug="zx9-speaker" />
        </div>
      </section>

      {/* Section IV */}

      <section
        id="four"
        className="mx-auto mt-12 flex h-80 w-[92%] max-w-[1440px] flex-col items-start justify-center rounded-lg px-6 md:w-4/5 lg:px-[95px]"
      >
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-3xl">ZX7 SPEAKER</h2>

          <ButtonBorder slug="zx7-speaker" />
        </div>
      </section>

      {/* Section V */}

      <section className="mx-auto mt-12 flex w-[92%] max-w-[1440px] flex-col items-center justify-between gap-2.5 md:w-4/5 md:flex-row">
        <div
          id="ear"
          className="h-[200px] w-full rounded-lg md:h-80 md:w-1/2"
        ></div>
        <div className="bg-light flex h-[200px] w-full max-w-[1440px] flex-col items-start justify-center rounded-lg px-6 md:h-80 md:w-1/2 md:px-[41px]">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-3xl">YX1 EARPHONES</h2>

            <ButtonBorder slug="yx1-earphones" />
          </div>
        </div>
      </section>

      {/* Section VI */}

      <AudioGear />
    </>
  );
}
