import express from "express";

import {loginAdmin,} from "../controllers/adminController.js"
import { addSnack, getAllSnacks,getSingleSnack,updateSnack,deleteSnack} from "../controllers/snackproductController.js";
import {addGarmentProduct,getAllGarmentProducts,getSingleGarmentProduct,updateGarmentProduct,deleteGarmentProduct} from "../controllers/garmentproductController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// ADMIN APIs.........................
// router.post("/register", registerAdmin);
// router.post("/login", loginAdmin);
// ADMIN LOGIN
router.post("/login", loginAdmin);

// SNACK PRODUCT APIs
router.post("/snackproduct/add", authMiddleware, addSnack);
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


export default router;