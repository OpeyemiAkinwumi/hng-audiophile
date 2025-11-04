export default function AudioGear() {
  return (
    <section className="mx-auto mt-12 flex w-[92%] max-w-[1440px] flex-col-reverse items-center justify-center gap-2.5 md:w-4/5 lg:flex-row">
      <div className="mt-[63px] flex w-full flex-col items-center justify-center text-center lg:mt-0 lg:w-1/2 lg:items-start lg:text-left">
        <h2 className="mb-8 max-w-[450px] text-3xl leading-9 font-bold tracking-[1.43px]">
          BRINGING YOU THE <span className="text-main">BEST</span> AUDIO GEAR
        </h2>

        <p className="text-sm leading-[25px] text-black/30 md:max-w-[505px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div
        id="man"
        className="flex h-[300px] w-full flex-col items-start justify-center overflow-hidden rounded-lg lg:h-[588px] lg:w-1/2"
      ></div>
    </section>
  );
}
