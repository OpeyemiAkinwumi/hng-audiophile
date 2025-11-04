"use client";

import { z } from "zod";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderFormData } from "./OrderFormData";

const checkoutSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address"),
    phone_no: z
      .string()
      .regex(
        /^\+?\d{7,15}$/,
        "Phone must be digits (7–15), optional leading +",
      ),
    address: z.string().min(1, "Address is required").max(200),
    zip_code: z
      .string()
      .min(2, "Zip code too short")
      .max(12, "Zip code too long"),
    city: z.string().min(1, "City is required").max(100),
    country: z.string().min(1, "Country is required").max(100),

    // ✅ match your actual radio values
    payment: z.enum(["e-money", "cash"], {
      message: "Payment method is required",
    }),

    e_number: z.string().optional(),
    e_pin: z.string().optional(),
  })
  // ✅ Require e-money number when payment === 'e-money'
  .refine(
    (data) =>
      data.payment === "cash" ||
      (data.e_number && /^\d{6,20}$/.test(data.e_number)),
    {
      message: "Valid e-Money number is required when paying with e-Money",
      path: ["e_number"],
    },
  )
  // ✅ Require e-money pin when payment === 'e-money'
  .refine(
    (data) =>
      data.payment === "cash" || (data.e_pin && /^\d{4,6}$/.test(data.e_pin)),
    {
      message:
        "Valid e-Money PIN (4–6 digits) is required when paying with e-Money",
      path: ["e_pin"],
    },
  );

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutForm({
  setFormData,
}: {
  setFormData: React.Dispatch<React.SetStateAction<OrderFormData | null>>;
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const payment = useWatch({ control, name: "payment" });

  function onSubmit(data: CheckoutFormValues) {
    console.log("Form values:", data);

    const mappedData: OrderFormData = {
      createdAt: new Date().toISOString(),
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone_no,
      },
      shipping: {
        address: data.address,
        city: data.city,
        zip_code: data.zip_code,
      },
      items: [], // ✅ will be filled at checkout
      status: "pending",
      totals: {
        subtotal: 0,
        shipping: 0,
        taxes: 0,
        grandTotal: 0,
      },
    };

    setFormData(mappedData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full text-sm">
      {/* Billing Details */}
      <p className="text-main mt-10 font-medium">BILLING DETAILS</p>

      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* Name */}
        <div className="relative flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("name")}
          />
          {errors.name && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="relative flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("email")}
          />
          {errors.email && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="relative flex w-full flex-col gap-2">
          <label className="font-bold" htmlFor="phone_no">
            Phone Number
          </label>
          <input
            type="text"
            id="phone_no"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("phone_no")}
          />
          {errors.phone_no && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.phone_no.message}
            </p>
          )}
        </div>
      </div>

      {/* Shipping Info */}
      <p className="text-main mt-10 font-medium">SHIPPING INFO</p>

      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* Address */}
        <div className="relative flex flex-col gap-2 md:col-span-2">
          <label className="font-bold" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("address")}
          />
          {errors.address && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Zip Code */}
        <div className="relative flex flex-col gap-2">
          <label className="font-bold" htmlFor="zip_code">
            Zip Code
          </label>
          <input
            type="text"
            id="zip_code"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("zip_code")}
          />
          {errors.zip_code && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.zip_code.message}
            </p>
          )}
        </div>

        {/* City */}
        <div className="relative flex flex-col gap-2">
          <label className="font-bold" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("city")}
          />
          {errors.city && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="relative flex flex-col gap-2">
          <label className="font-bold" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
            {...register("country")}
          />
          {errors.country && (
            <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      {/* Payment Section */}
      <p className="text-main mt-10 font-medium">PAYMENT DETAILS</p>

      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {/* Payment Method */}
        <div className="flex w-full flex-col items-start gap-4 md:col-span-2 lg:flex-row lg:justify-between">
          <p className="font-bold">Payment method</p>

          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            {["e-money", "cash"].map((option) => (
              <label
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
                key={option}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-lg border p-4 ${
                  payment === option ? "border-main" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value={option}
                  {...register("payment")}
                  className="accent-main h-5 w-5"
                />
                <span className="text-sm font-semibold">
                  {option === "e-money" ? "e-Money" : "Cash on Delivery"}
                </span>
              </label>
            ))}
            {errors.payment && (
              <p className="absolute -bottom-4.5 text-xs font-medium text-red-500">
                {errors.payment.message}
              </p>
            )}
          </div>
        </div>

        {/* e-Money Inputs */}
        {payment === "e-money" && (
          <>
            <div className="relative flex flex-col gap-2">
              <label className="font-bold" htmlFor="e_number">
                e-Money Number
              </label>
              <input
                type="text"
                id="e_number"
                className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
                {...register("e_number")}
              />
              {errors.e_number && (
                <p className="absolute -bottom-6 text-xs font-medium text-red-500">
                  {errors.e_number.message}
                </p>
              )}
            </div>

            <div className="relative flex flex-col gap-2">
              <label className="font-bold" htmlFor="e_pin">
                e-Money Pin
              </label>
              <input
                type="text"
                id="e_pin"
                className="w-full rounded-md border border-black/30 px-6 py-4 text-black/60 focus:outline-none"
                {...register("e_pin")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
              />
              {errors.e_pin && (
                <p className="absolute -bottom-6 text-xs font-medium text-red-500">
                  {errors.e_pin.message}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </form>
  );
}
