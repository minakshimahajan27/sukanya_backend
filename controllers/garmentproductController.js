
import GarmentProduct from "../models/garmentproductModel.js";

// ADD GARMENT PRODUCT
export const addGarmentProduct = async (req, res) => {
  try {
    const {
      productName,
      category,
      description,
      price,
      discountPrice,
      sizes,
      colors,
      stock,
      images,
      fabric,
      status
    } = req.body;

    if (!productName || !category || !description || price === undefined) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const newProduct = new GarmentProduct({
      productName,
      category,
      description,
      price,
      discountPrice,
      sizes,
      colors,
      stock,
      images,
      fabric,
      status
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Garment Product Added Successfully",
      product: newProduct
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET ALL GARMENT PRODUCTS
export const getAllGarmentProducts = async (req, res) => {
  try {
    const products = await GarmentProduct.find().sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET SINGLE GARMENT PRODUCT
export const getSingleGarmentProduct = async (req, res) => {
  try {
    const product = await GarmentProduct.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Garment Product Not Found"
      });
    }

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// UPDATE GARMENT PRODUCT
export const updateGarmentProduct = async (req, res) => {
  try {
    const product = await GarmentProduct.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Garment Product Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Garment Product Updated Successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// DELETE GARMENT PRODUCT
export const deleteGarmentProduct = async (req, res) => {
  try {
    const product = await GarmentProduct.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Garment Product Not Found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Garment Product Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
