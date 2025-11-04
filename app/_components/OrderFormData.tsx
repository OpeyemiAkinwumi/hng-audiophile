"use client";

export type OrderFormData = {
  createdAt: string;
  customer: {
    email: string;
    name: string;
    phone: string;
  };
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  shipping: {
    address: string;
    city: string;
    zip_code: string;
  };
  status: string;
  totals: {
    grandTotal: number;
    shipping: number;
    subtotal: number;
    taxes: number;
  };
};
