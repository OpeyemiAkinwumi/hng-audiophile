import AudioGear from "../_components/AudioGear";
import GridCard from "../_components/GridCard";
import Header from "../_components/Header";
import ProductCard from "../_components/ProductCard";
import Spacer from "../_components/Spacer";

export default function Page() {
  return (
    <>
      <Header title="HEADPHONES" />

      <ProductCard
        image="/images/product headphone large.png"
        title="ZX9 SPEAKER"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        slug="zx9-speaker"
      />

      <ProductCard
        image="/images/black headphone.png"
        title="XX99 Mark II Headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        swipe={true}
        slug="xx99-mark-two-headphones"
      />
      <ProductCard
        image="/images/white headphones.png"
        title="XX59 SPEAKER"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        slug="xx59-headphones"
      />

      <Spacer />
      <GridCard />
      <AudioGear />
    </>
  );
}
