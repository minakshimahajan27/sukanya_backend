import express from "express";

import {loginAdmin,} from "../controllers/adminController.js"
import { addSnack, getAllSnacks,getSingleSnack,updateSnack,deleteSnack} from "../controllers/snackproductController.js";
import {addGarmentProduct,getAllGarmentProducts,getSingleGarmentProduct,updateGarmentProduct,deleteGarmentProduct} from "../controllers/garmentproductController.js";
import {
  addCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

// ADMIN APIs.........................
// router.post("/register", registerAdmin);
// router.post("/login", loginAdmin);
// ADMIN LOGIN
router.post("/login", loginAdmin);

// SNACK PRODUCT APIs
router.post(
  "/snackproduct/add",
  authMiddleware,
  upload.single("image"),
  addSnack
);
router.get("/snackproduct/all", getAllSnacks);
router.get("/snackproduct/:id", getSingleSnack);
router.put("/snackproduct/update/:id", authMiddleware, updateSnack);
router.delete("/snackproduct/delete/:id", authMiddleware, deleteSnack);

// GARMENT PRODUCT APIs
router.post("/garmentproduct/add", authMiddleware, addGarmentProduct);
router.get("/garmentproduct/all", getAllGarmentProducts);
router.get("/garmentproduct/:id", getSingleGarmentProduct);
router.put("/garmentproduct/update/:id", authMiddleware, updateGarmentProduct);
router.delete("/garmentproduct/delete/:id", authMiddleware, deleteGarmentProduct);


// CUSTOMER APIs
router.post("/customer/add", authMiddleware, addCustomer);
router.get("/customer/all", authMiddleware, getAllCustomers);
router.get("/customer/:id", authMiddleware, getSingleCustomer);
router.put("/customer/update/:id", authMiddleware, updateCustomer);
router.delete("/customer/delete/:id", authMiddleware, deleteCustomer);

export default router;