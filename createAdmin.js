
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import Admin from "./models/adminModel.js";
import bcrypt from "bcryptjs";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const { ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

    if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
      throw new Error("Admin details missing in .env file");
    }

    const existingAdmin = await Admin.findOne({
      email: ADMIN_EMAIL.toLowerCase()
    });

    if (existingAdmin) {
      console.log("Admin account already exists!");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

    const admin = await Admin.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL.toLowerCase(),
      password: hashedPassword,
      role: "admin"
    });

    console.log("First Admin Created Successfully!");
    console.log("Admin Email:", admin.email);

    process.exit(0);

  } catch (error) {
    console.error("Admin Creation Failed:", error.message);
    process.exit(1);
  }
};

createAdmin();
