
import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { Resend } from "resend";
import { gadgets } from "../../data/gadgets";

type ResponseData = {
  success: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      product,
      colour,
      name,
      phone,
      whatsapp,
      state,
      city,
      address,
      quantity,
      note,
    } = req.body;

    // Validate required customer details
    if (
      !product ||
      !name ||
      !phone ||
      !state ||
      !city ||
      !address ||
      quantity === undefined ||
      quantity === null ||
      quantity === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Validate quantity
    const orderQuantity = Number(quantity);

    if (
      !Number.isInteger(orderQuantity) ||
      orderQuantity < 1 ||
      orderQuantity > 5
    ) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be between 1 and 5.",
      });
    }

    // Find the product using the trusted product catalogue
    const gadget = gadgets.find((item) => item.name === product);

    if (!gadget || !gadget.available) {
      return res.status(400).json({
        success: false,
        message: "This product is unavailable.",
      });
    }

    // Calculate the correct price on the server
    let unitPrice = gadget.price;
    let orderColour = "";

    // Apply colour-specific pricing only to products that support it
    if ("colourPrices" in gadget) {
      if (typeof colour !== "string" || !colour.trim()) {
        return res.status(400).json({
          success: false,
          message: "Please select a camera colour.",
        });
      }

      if (
        !gadget.colourAvailability ||
        !gadget.colourAvailability.available.includes(colour)
      ) {
        return res.status(400).json({
          success: false,
          message: "The selected colour is unavailable.",
        });
      }

      const selectedPrice =
        gadget.colourPrices[
          colour as keyof typeof gadget.colourPrices
        ];

      if (typeof selectedPrice !== "number") {
        return res.status(400).json({
          success: false,
          message: "Invalid product colour selection.",
        });
      }

      unitPrice = selectedPrice;
      orderColour = colour;
    }

    // Calculate total using the trusted server-side price
    const orderTotal = unitPrice * orderQuantity;

    // Clean customer information for email display
    const safeProduct = escapeHtml(product);
    const safeColour = escapeHtml(orderColour);
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeWhatsapp = escapeHtml(whatsapp || "Not provided");
    const safeState = escapeHtml(state);
    const safeCity = escapeHtml(city);
    const safeAddress = escapeHtml(address);
    const safeNote = escapeHtml(note || "");

    // GOOGLE SHEETS
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-NG", {
              timeZone: "Africa/Lagos",
            }),
            product,
            name,
            phone,
            whatsapp || "",
            state,
            city,
            address,
            orderQuantity,
            note || "",
            "Pending",
            orderColour,
            unitPrice,
            orderTotal,
          ],
        ],
      },
    });

    // EMAIL NOTIFICATION
    // Email failure should not make a saved order appear unsuccessful.
    try {
      const emailResult = await resend.emails.send({
        from: "StarnTech Orders <onboarding@resend.dev>",
        to: process.env.ORDER_NOTIFICATION_EMAIL!,
        subject: `New Order - ${product}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
            <h2 style="color: #15803d;">New StarnTech Order</h2>
            <p>A new order has been submitted from your website.</p>
            <hr />

            <h3>Product Details</h3>
            <p>
              <strong>Product:</strong> ${safeProduct}<br />
              ${
                orderColour
                  ? `<strong>Colour:</strong> ${safeColour}<br />`
                  : ""
              }
              <strong>Quantity:</strong> ${orderQuantity}<br />
              <strong>Unit Price:</strong> ${formatNaira(unitPrice)}<br />
              <strong>Order Total:</strong> ${formatNaira(orderTotal)}
            </p>

            <h3>Customer Details</h3>
            <p>
              <strong>Name:</strong> ${safeName}<br />
              <strong>Phone:</strong> ${safePhone}<br />
              <strong>WhatsApp:</strong> ${safeWhatsapp}
            </p>

            <h3>Delivery Details</h3>
            <p>
              <strong>State:</strong> ${safeState}<br />
              <strong>City:</strong> ${safeCity}<br />
              <strong>Address:</strong> ${safeAddress}
            </p>

            ${
              note
                ? `<h3>Customer Note</h3><p>${safeNote}</p>`
                : ""
            }

            <hr />
            <p><strong>Status:</strong> Pending</p>
            <p style="color: #666; font-size: 13px;">
              Automatically generated by the StarnTech Gadget Store.
            </p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Order email error:", emailResult.error);
      }
    } catch (emailError) {
      console.error("Order email error:", emailError);
    }

    return res.status(200).json({
      success: true,
      message: "Order submitted successfully.",
    });
  } catch (error) {
    console.error("Order submission error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your order. Please try again.",
    });
  }
}
