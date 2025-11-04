import Link from "next/link";

export default function Button({ slug }: { slug: string }) {
  return (
    <Link
      className="bg-main hover:bg-main-light mt-7 px-8 py-4 text-[13px] font-bold text-white transition-all duration-150 lg:mt-10"
      href={`product/${slug}`}
    >
      SEE PRODUCT
    </Link>
  );
}
