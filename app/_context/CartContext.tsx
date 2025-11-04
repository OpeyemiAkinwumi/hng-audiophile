import { createContext } from "react";

type CartContextType = {
  displayCart: boolean;
  setDisplayCart: (value: boolean) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
