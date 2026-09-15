"use server";

import nodemailer from "nodemailer";

export async function sendEmailAction(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const file = formData.get("attachment");

    if (!name || !email || !message) {
      return { error: "Name, email, and message are required fields." };
    }

    // Initialize nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let attachments = [];

    // Handle file upload
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends email to your personal address
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { error: "Failed to send the message. Please try again later." };
  }
}
