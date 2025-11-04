import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartProvider({ children }: { children: ReactNode }) {
  const [displayCart, setDisplayCart] = useState(false);
  return (
    <CartContext.Provider value={{ displayCart, setDisplayCart }}>
      {children}
    </CartContext.Provider>
  );
}
