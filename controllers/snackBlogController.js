
import SnackBlog from "../models/snackBlogModel.js";

// ADD BLOG
export const addSnackBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      content,
      author,
      status,
    } = req.body;

    if (!title || !category || !description || !content) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : "";

    const blog = await SnackBlog.create({
      title,
      category,
      description,
      content,
      image,
      author: author || "Admin",
      status: status || "Published",
    });

    return res.status(201).json({
      success: true,
      message: "Blog added successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL BLOGS
export const getAllSnackBlogs = async (req, res) => {
  try {
    const blogs = await SnackBlog.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      total: blogs.length,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE BLOG
export const getSnackBlogById = async (req, res) => {
  try {
    const blog = await SnackBlog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE BLOG
export const updateSnackBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      description,
      content,
      author,
      status,
    } = req.body;

    const updateData = {
      title,
      category,
      description,
      content,
      author,
      status,
    };

    // Remove undefined fields
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] === undefined) {
        delete updateData[key];
      }
    });

    // Update image if new image is uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const blog = await SnackBlog.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE BLOG
export const deleteSnackBlog = async (req, res) => {
  try {
    const blog = await SnackBlog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
