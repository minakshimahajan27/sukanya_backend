
import mongoose from "mongoose";

const snackSchema = new mongoose.Schema(
  {
    snackName: {
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

    weight: {
      type: String,
      required: true
    },

    ingredients: {
      type: [String],
      default: []
    },

    images: {
      type: [String],
      default: []
    },

    stock: {
      type: Number,
      default: 0
    },

    isAvailable: {
      type: Boolean,
      default: true
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  },
  {
    timestamps: true
  }
);

const Snack = mongoose.model("Snack", snackSchema);

export default Snack;