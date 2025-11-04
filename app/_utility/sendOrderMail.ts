import { Resend } from "resend";
import { EmailTemplate } from "../_components/EmailTemplate";
import { OrderFormData } from "../_components/OrderFormData";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(
  name: string,
  email: string,
  orderId: string,
  data: OrderFormData,
) {
  try {
    const response = await resend.emails.send({
      from: "OGB Fitness <orders@ogbfitness.com>",
      to: email,
      subject: `Order Confirmation - ${orderId}`,
      react: EmailTemplate({ name, orderId, data }),
    });

    console.log("📧 Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}
