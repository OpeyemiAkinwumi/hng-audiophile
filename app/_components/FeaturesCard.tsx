type includes = {
  quantity: number;
  item: string;
};

type FeaturesCardProp = {
  features: string;
  include: includes[];
};

export default function FeaturesCard({ features, include }: FeaturesCardProp) {
  return (
    <section className="mx-auto mt-40 flex w-[92%] max-w-[1440px] flex-col items-start justify-start gap-10 md:w-4/5 lg:flex-row">
      <div className="flex w-full flex-col items-start justify-center lg:w-[60%]">
        <h2 className="mb-8 text-3xl font-bold tracking-[1.14px]">FEATURES</h2>
        <p className="text-sm leading-5 text-black/60">{features}</p>
      </div>

      <div className="flex w-full items-start justify-start gap-10 lg:block lg:w-auto">
        <h2 className="mb-8 text-3xl font-bold tracking-[1.14px] md:w-[400px] lg:max-w-[339px]">
          IN THE BOX
        </h2>

        <ul>
          {include.map((item, index) => (
            <li key={index}>
              <p className="flex items-center py-0.5 justify-start gap-6 text-sm leading-5 text-black/60">
                <span className="text-main font-bold">{item.quantity}x</span>{" "}
                {item.item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
