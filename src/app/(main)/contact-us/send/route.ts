import mail from "@sendgrid/mail";
import { NextResponse } from "next/server";

// Create an api key in sendgrid and store someplace safe
mail.setApiKey(process.env.SENDGRID_API_KEY || "");

type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "no-reply@avime.au",
    from: "no-reply@avime.au",
    subject: `Contact Form Submission - ${body.email}`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: "success",
        message:
          "Your message was sent. We will contact you within 1-3 business days!",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}