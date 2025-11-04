import Link from "next/link";
import AudioGear from "../../_components/AudioGear";
import FeaturesCard from "../../_components/FeaturesCard";
import Gallery from "../../_components/Gallery";
import GridCard from "../../_components/GridCard";
import Navbar from "../../_components/Navbar";
import Others from "../../_components/Others";
import ProductCard from "../../_components/ProductCard";

import Spacer from "../../_components/Spacer";

import DATABASE from "../../_data/db.json";
import GoBackButton from "@/app/_components/GoBackButton";

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  // DATABASE is an array — find the product by slug
  const product = DATABASE.data.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="flex h-screen w-[92%] max-w-[1440px] flex-col items-center justify-center bg-black text-white md:w-4/5">
        <h1> Product not found</h1>
        <Link
          className="bg-main hover:bg-main-light mt-7 px-8 py-4 text-[13px] font-bold text-white transition-all duration-150 lg:mt-10"
          href="/"
        >
          GO TO HOMEPAGE
        </Link>
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <div className="absolute top-40 flex w-[92%] max-w-[1440px] items-center justify-start text-sm font-medium text-black/70 md:w-4/5">
        <GoBackButton />
      </div>

      <ProductCard
        image={product.image.desktop}
        title={product.name}
        description={product.description}
        cart={true}
        price={product.price}
        slug="zx9-speakers"
      />

      <FeaturesCard features={product.features} include={product.includes} />

      <Gallery
        image1={product.gallery.first.desktop}
        image2={product.gallery.second.desktop}
        image3={product.gallery.third.desktop}
      />

      <Others others={product.others} />

      <Spacer />
      <GridCard />
      <AudioGear />
    </>
  );
}
