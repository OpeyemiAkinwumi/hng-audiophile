"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      className="cursor-pointer p-0.5 hover:text-black/60"
      onClick={() => router.back()} // 👈 same as navigate(-1)
    >
      Go Back
    </button>
  );
}
