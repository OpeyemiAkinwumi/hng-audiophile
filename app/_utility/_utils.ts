// import { CartItem } from "./cart"; // assuming you already have this type defined

// /**
//  * Calculates the total price of all items in the cart.
//  * Multiplies price * quantity for each item.
//  */
// export function getCartTotal(): number {
//   if (typeof window === "undefined") return 0; // Prevent SSR errors

//   try {
//     const storedCart = localStorage.getItem("cart");
//     if (!storedCart) return 0;

//     const cartItems: CartItem[] = JSON.parse(storedCart);

//     // Sum up total (price × quantity)
//     const total = cartItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0,
//     );

//     return total;
//   } catch (error) {
//     console.error("❌ Error calculating cart total:", error);
//     return 0;
//   }
// }
