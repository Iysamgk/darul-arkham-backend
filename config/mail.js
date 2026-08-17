import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Port 465 uses SSL directly
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4, // Enforce IPv4 (prevents IPv6 connection hangs on Render)
  pool: true, // Reuse connections to prevent handshake delays
  maxConnections: 3,
  maxMessages: 100,
  connectionTimeout: 20000, // 20 seconds
  greetingTimeout: 15000,
  socketTimeout: 20000,
  logger: false,
  debug: false,
});

export default transporter;
