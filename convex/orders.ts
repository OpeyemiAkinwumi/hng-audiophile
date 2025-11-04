import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a new order
export const createOrder = mutation({
  args: {
    createdAt: v.string(),
    customer: v.object({
      email: v.string(),
      name: v.string(),
      phone: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      }),
    ),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      zip_code: v.string(),
    }),
    status: v.string(),
    totals: v.object({
      grandTotal: v.number(),
      shipping: v.number(),
      subtotal: v.number(),
      taxes: v.number(),
    }),
  },

  handler: async (ctx, args) => {
    // Insert a new order document
    const orderId = await ctx.db.insert("orders", args);

    // Return the generated Order ID
    return { orderId };
  },
});


// Temporary mutation to delete invalid order
export const deleteOrder = mutation({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return `Order ${args.id} deleted`;
  },
});