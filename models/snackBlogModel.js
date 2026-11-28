
import mongoose from "mongoose";

const snackBlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Blog category is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Blog description is required"],
      trim: true,
    },

    content: {
      type: String,
      required: [true, "Blog content is required"],
    },

    image: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "Admin",
      trim: true,
    },

    status: {
      type: String,
      enum: ["Published", "Draft"],
      default: "Published",
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Automatically create slug if not provided
snackBlogSchema.pre("validate", function (next) {
  if (this.title && !this.slug) {
    this.slug =
      this.title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") +
      "-" +
      Date.now();
  }

  next();
});

const SnackBlog = mongoose.model("SnackBlog", snackBlogSchema);

export default SnackBlog;
