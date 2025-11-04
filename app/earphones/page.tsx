import AudioGear from "../_components/AudioGear";
import GridCard from "../_components/GridCard";
import Header from "../_components/Header";
import ProductCard from "../_components/ProductCard";
import Spacer from "../_components/Spacer";

export const metadata = {
  title: "Audiophile | Earphones",
};

export default function Page() {
  return (
    <>
      <Header title="EARPHONES" />

      <ProductCard
        image="/images/earphoness.png"
        title="YX1 WIRELESS EARPHONES"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        slug="yx1-earphones"
      />

      <Spacer />
      <GridCard />
      <AudioGear />
    </>
  );
}
