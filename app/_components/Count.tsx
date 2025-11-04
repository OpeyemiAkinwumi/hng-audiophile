import React, { useState } from "react";

export default function Count({ quantity }: { quantity: number }) {
  const [count, setCount] = useState(quantity);

  return (
    <div className="bg-light flex items-center justify-center gap-5 p-2 text-xs font-medium text-black/50 lg:w-20">
      <span
        className="cursor-pointer"
        onClick={() => setCount((num) => num - 1)}
      >
        -
      </span>
      <span className="font-bold text-black">{count}</span>
      <span
        className="cursor-pointer"
        onClick={() => setCount((num) => num + 1)}
      >
        +
      </span>
    </div>
  );
}
