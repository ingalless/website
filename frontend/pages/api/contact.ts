import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import validator from "email-validator";

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 100 requests per windowMs
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const confirmationMessage = (name: string) => `Hey ${name}

Here's a quick email to let you know we received your contact request. We will be in touch soon to discuss your project.

Kind regards,

Jonny Ingall
Foveal Development
https://foveal.dev
`;

interface ContactDetails {
  name: string;
  email: string;
  company: string;
  about: string;
}
const messageToMe = ({
  name,
  email,
  company,
  about,
}: ContactDetails) => `Request for Contact from ${name}

Name: ${name}
Email: ${email}
Company: ${company}
About:
${about}

Sent from https://fovealdev.com
`;

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  if (!data.name) {
    return res.status(422).end();
  }
  if (!data.email) {
    return res.status(422).end();
  }
  if (!validator.validate(data.email)) {
    return res.status(422).end();
  }
  if (!data.company) {
    return res.status(422).end();
  }
  if (!data.about) {
    return res.status(422).end();
  }

  await runMiddleware(req, res, limiter);

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  });
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    }
  });

  const customerEmail = {
    from: "Foveal Development <dev@fovealdev.com>",
    to: data.email,
    subject: "Your recent contact request - Foveal Development",
    text: confirmationMessage(data.name),
  };
  const emailToMe = {
    from: "Contact Us Form <dev@fovealdev.com>",
    to: "hello@fovealdev.com",
    subject: `Contact Us Request - ${data.name}`,
    text: messageToMe(data),
  };
  transporter.sendMail(customerEmail, (error) => {
    if (error) {
      console.error("Failed to send to customer", error);
    }
  });
  transporter.sendMail(emailToMe, (error) => {
    if (error) {
      console.error("Failed to send to me", error);
    } else {
      res.status(200).end();
    }
  });
};
