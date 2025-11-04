import Link from "next/link";

export default function DarkButton({ slug }: { slug: string }) {
  return (
    <Link
      className="mt-7 cursor-pointer bg-black px-8 py-4 text-[13px] font-bold text-white transition-all duration-150 hover:bg-black/80 lg:mt-10"
      href={`product/${slug}`}
    >
      SEE PRODUCT
    </Link>
  );
}
