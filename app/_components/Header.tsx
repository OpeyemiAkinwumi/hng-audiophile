import Navbar from "./Navbar";

export default function Header({ title }: { title: string }) {
  return (
    <div className="text-lighter flex h-[336px] w-full max-w-[1440px] flex-col items-center justify-start bg-black pb-[97px]">
      <Navbar />

      <h1 className="mt-auto text-4xl">{title}</h1>
    </div>
  );
}
