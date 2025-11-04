import Image from "next/image";
import Button from "./Button";

type Others = {
  image: {
    desktop: string;
  };
  name: string;
  slug: string;
};

type OthersSlug = {
  others: Others[];
};

export default function Others({ others }: OthersSlug) {
  return (
    <section className="mt-[120px] flex w-[92%] max-w-[1440px] flex-col items-center justify-start md:w-4/5 lg:mt-[140px]">
      <h2 className="text-3xl font-bold tracking-[1.14px]">
        YOU MAY ALSO LIKE
      </h2>

      <div className="mt-16 grid w-full grid-cols-1 gap-10 md:grid-cols-3">
        {others.map((other) => (
          <div
            key={other.name}
            className="flex w-full flex-col items-center justify-center"
          >
            <div className="bg-light flex h-[120px] w-full items-center justify-center md:h-[318px] lg:h-[318px]">
              <Image
                className="hidden md:block"
                src={other.image.desktop}
                width={190.81}
                height={199}
                alt="Product Image"
              />
              <Image
                className="block md:hidden"
                src={other.image.desktop}
                width={79.58}
                height={83}
                alt="Product Image"
              />
            </div>

            <h3 className="mt-10 text-xl font-bold md:text-2xl">
              {other.name}
            </h3>

            <Button slug={other.slug} />
          </div>
        ))}
      </div>
    </section>
  );
}
