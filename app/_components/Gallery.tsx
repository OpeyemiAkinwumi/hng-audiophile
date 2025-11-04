import Image from "next/image";

type GalleryProp = {
  image1: string;
  image2: string;
  image3: string;
};

export default function Gallery({ image1, image2, image3 }: GalleryProp) {
  return (
    <div className="mx-auto mt-40 grid w-[92%] max-w-[1440px] grid-rows-[174px_174px_368px] gap-5 md:w-4/5 md:grid-cols-[40%_60%] md:grid-rows-[174px_174px] lg:grid-rows-[280px_280px]">
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-blue-300">
        <Image
          src={image1}
          fill
          className="object-cover"
          alt="Product Image"
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-blue-300 md:row-span-2">
        {" "}
        <Image
          src={image2}
          fill
          className="object-cover"
          alt="Product Image"
        />
      </div>
      <div className="relative h-full w-full overflow-hidden rounded-lg bg-blue-300">
        <Image
          src={image3}
          fill
          className="object-cover"
          alt="Product Image"
        />
      </div>
    </div>
  );
}
