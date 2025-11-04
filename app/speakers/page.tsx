import AudioGear from "../_components/AudioGear";
import GridCard from "../_components/GridCard";
import Header from "../_components/Header";
import ProductCard from "../_components/ProductCard";
import Spacer from "../_components/Spacer";

export default function Page() {
  return (
    <>
      <Header title="SPEAKERS" />

      <ProductCard
        image="/images/speakers-large.png"
        title="ZX9 SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        slug="zx9-speaker"
      />

      <ProductCard
        image="/images/speaker front.png"
        title="ZX7 SPEAKER"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        swipe={true}
        slug="zx7-speaker"
      />

      <Spacer />
      <GridCard />
      <AudioGear />
    </>
  );
}
