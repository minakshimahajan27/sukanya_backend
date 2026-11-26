
import mongoose from "mongoose";

const garmentProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    discountPrice: {
      type: Number,
      default: 0,
      min: 0
    },

    sizes: {
      type: [String],
      default: []
    },

    colors: {
      type: [String],
      default: []
    },

    stock: {
      type: Number,
      default: 0,
      min: 0
    },

    images: {
      type: [String],
      default: []
    },

    fabric: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active"
    }
  },
  {
    timestamps: true
  }
);

const GarmentProduct = mongoose.model(
  "GarmentProduct",
  garmentProductSchema
);

export default GarmentProduct;
