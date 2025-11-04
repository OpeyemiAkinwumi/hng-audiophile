import GridItem from "./GridItem";

export default function GridCard() {
  return (
    <section className="flex w-full max-w-[1440px] items-center justify-center py-[120px]">
      {/* className="w-full md:w-[223px] rounded-lg py-[30px] md:h-[165px] lg:w-[350px] lg:h-[204px] bg-light relative  flex flex-col justify-center items-center   " */}

      <div className="grid w-[92%] grid-cols-1 gap-[68px] md:grid-cols-3 md:gap-2.5 lg:w-4/5 lg:gap-[30px]">
        <GridItem
          src="/images/headphone.png"
          alt="Headphone Image"
          title="HEADPHONES"
          slug="headphones"
        />
        <GridItem
          src="/images/speakers.png"
          alt="Speaker Image"
          title="SPEAKERS"
          slug="speakers"
        />
        <GridItem
          src="/images/earphones.png"
          alt="Earphones Image"
          title="EARPHONES"
          slug="earphones"
        />
      </div>
    </section>
  );
}
