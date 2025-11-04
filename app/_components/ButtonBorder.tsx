import Link from "next/link";

export default function ButtonBorder({ slug }: { slug: string }) {
  return (
    <Link
      className="mt-8 cursor-pointer border-2 border-black px-8 py-4 text-[13px] font-bold text-black transition-all duration-150 hover:bg-black hover:text-white lg:mt-10"
   href={`product/${slug}`}
    >
      SEE PRODUCT
    </Link>
  );
}
