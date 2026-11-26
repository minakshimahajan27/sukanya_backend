
import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please login first."
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findById(decoded.id).select("-password");

    if (!admin || admin.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only."
      });
    }

    req.admin = admin;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token."
    });
  }
};

export default authMiddleware;
