import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
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
        price: v.string(),
        quantity: v.string(),
      })
    ),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      zip_code: v.string(),
    }),
    status: v.string(),
    totals: v.object({
      grandTotal: v.string(),
      shipping: v.string(),
      subtotal: v.string(),
      taxes: v.string(),
    }),
  }),
});