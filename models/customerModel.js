import mongoose from "mongoose";
const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    mobile: {
      type: String,
      required: true,
      trim: true
    },
    alternateMobile: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      default: ""
    },
    state: {
      type: String,
      default: ""
    },
    pincode: {
      type: String,
      default: ""
    },
    customerType: {
      type: String,
      enum: ["Individual", "Business"],
      default: "Individual"
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active"
    },
    notes: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;