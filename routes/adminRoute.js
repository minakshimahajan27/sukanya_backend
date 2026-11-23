import express from "express";

import {
  registerAdmin,
  loginAdmin,
} from "../controllers/adminController.js";

// Snack Product Controller
import {
  addSnack,
  getAllSnacks,
  getSingleSnack,
  updateSnack,
  deleteSnack
} from "../controllers/snackproductController.js";

const router = express.Router();

// ADMIN APIs.........................
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);


// SNACK PRODUCT APIs...........................
router.post("/snackproduct/add", addSnack);
router.get("/snackproduct/all", getAllSnacks);
router.get("/snackproduct/:id", getSingleSnack);
router.put("/snackproduct/update/:id", updateSnack);
router.delete("/snackproduct/delete/:id", deleteSnack);


export default router;