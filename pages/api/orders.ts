import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type ResponseData = {
  success: boolean;
  message: string;
};

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
      name,
      phone,
      whatsapp,
      state,
      city,
      address,
      quantity,
      note,
    } = req.body;

    // Basic validation
    if (!product || !name || !phone || !state || !city || !address || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    // Google authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // Add order to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:K",
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
            quantity,
            note || "",
            "Pending",
          ],
        ],
      },
    });

    return res.status(200).json({
      success: true,
      message: "Order submitted successfully.",
    });
  } catch (error) {
    console.error("Google Sheets error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to submit your order. Please try again.",
    });
  }
}