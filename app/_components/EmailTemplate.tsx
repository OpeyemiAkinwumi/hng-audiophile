import { OrderFormData } from "./OrderFormData";

interface EmailTemplateProps {
  name: string;
  orderId: string;
  data: OrderFormData;
}

export function EmailTemplate({ name, orderId, data }: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "'Inter', Arial, sans-serif",
        backgroundColor: "#f8fafc",
        padding: "24px",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "32px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: "22px", marginBottom: "8px" }}>Hi {name},</h1>
        <p style={{ fontSize: "16px", marginBottom: "16px" }}>
          🎉 Thank you for your purchase! Your order has been successfully
          placed.
        </p>

        {/* Order ID */}
        <p
          style={{
            backgroundColor: "#f1f5f9",
            padding: "10px 14px",
            borderRadius: "8px",
            fontSize: "14px",
            marginBottom: "24px",
          }}
        >
          <strong>Order ID:</strong> {orderId}
        </p>

        {/* Items Summary */}
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "8px",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "4px",
          }}
        >
          Order Summary
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: "left",
                borderBottom: "1px solid #e2e8f0",
                fontSize: "14px",
              }}
            >
              <th style={{ padding: "8px 4px" }}>Item</th>
              <th style={{ padding: "8px 4px" }}>Qty</th>
              <th style={{ padding: "8px 4px" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid #f1f5f9",
                  fontSize: "14px",
                }}
              >
                <td style={{ padding: "8px 4px" }}>{item.name}</td>
                <td style={{ padding: "8px 4px" }}>{item.quantity}</td>
                <td style={{ padding: "8px 4px" }}>
                  ₦{item.price.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div style={{ fontSize: "14px", marginBottom: "24px" }}>
          <p>
            <strong>Subtotal:</strong> ₦{data.totals.subtotal.toLocaleString()}
          </p>
          <p>
            <strong>Shipping:</strong> ₦{data.totals.shipping.toLocaleString()}
          </p>
          <p>
            <strong>Taxes:</strong> ₦{data.totals.taxes.toLocaleString()}
          </p>
          <p style={{ fontSize: "16px", marginTop: "8px" }}>
            <strong>Grand Total:</strong>{" "}
            <span style={{ color: "#16a34a" }}>
              ₦{data.totals.grandTotal.toLocaleString()}
            </span>
          </p>
        </div>

        {/* Shipping Info */}
        <h2
          style={{
            fontSize: "18px",
            marginBottom: "8px",
            borderBottom: "2px solid #e2e8f0",
            paddingBottom: "4px",
          }}
        >
          Shipping Details
        </h2>

        <p style={{ fontSize: "14px", marginBottom: "16px" }}>
          {data.shipping.address},<br />
          {data.shipping.city}, {data.shipping.zip_code}
        </p>

        {/* CTA */}
        <a
          href={`https://yourstore.com/orders/${orderId}`}
          style={{
            display: "inline-block",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          View your order →
        </a>

        {/* Footer */}
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            marginTop: "32px",
            paddingTop: "16px",
            fontSize: "13px",
            color: "#64748b",
          }}
        >
          <p>
            Need help? Contact our support team at{" "}
            <a
              href="mailto:support@yourstore.com"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              support@yourstore.com
            </a>
          </p>
          <p style={{ marginTop: "8px" }}>
            © {new Date().getFullYear()} OGB Fitness
          </p>
        </div>
      </div>
    </div>
  );
}
