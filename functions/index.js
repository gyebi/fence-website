// functions/index.js
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const { Resend } = require("resend");

admin.initializeApp();

const db = admin.firestore();

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

exports.contact = onRequest(
  {
    cors: true,
    invoker: "public",
    region: "us-central1",
  },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method not allowed.",
      });
    }

    try {
      const {
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        message,
      } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Name, email, and message are required.",
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const contactInbox =
        process.env.CONTACT_TO_EMAIL || "abigailgyebi@gmail.com";
      const senderEmail =
        process.env.RESEND_FROM_EMAIL ||
        "Fence Website <hello@bl-techghana.com>";

      if (!resendApiKey) {
        return res.status(500).json({
          message: "Email service is not configured.",
          error: "Missing RESEND_API_KEY",
        });
      }

      const resend = new Resend(resendApiKey);

      // Temporarily disabled while testing Resend
      // const enquiry = {
      //   name,
      //   email,
      //   phone: phone || "",
      //   company: company || "",
      //   projectType: projectType || "",
      //   budget: budget || "",
      //   message,
      //   source: "Fence Website",
      //   status: "new",
      //   createdAt: admin.firestore.FieldValue.serverTimestamp(),
      // };
      // await db.collection("enquiries").add(enquiry);

      const emailResult = await resend.emails.send({
        from: senderEmail,
        to: [contactInbox],
        replyTo: email,
        subject: `New Fence enquiry from ${name}`,
        html: `
          <h2>New Fence Website Enquiry</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
          <p><strong>Project Type:</strong> ${escapeHtml(projectType || "Not provided")}</p>
          <p><strong>Budget:</strong> ${escapeHtml(budget || "Not provided")}</p>

          <h3>Message</h3>
          <p>${escapeHtml(message)}</p>
        `,
      });

      if (emailResult.error) {
        throw new Error(emailResult.error.message || "Resend failed.");
      }

      return res.status(200).json({
        message: "Enquiry sent successfully.",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      return res.status(500).json({
        message: "Unable to send enquiry right now.",
      });
    }
  }
);
