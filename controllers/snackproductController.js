

import Snack from "../models/snackproductModel.js";

// ADD SNACK
export const addSnack = async (req, res) => {
  try {
    const snack = await Snack.create(req.body);

    res.status(201).json({
      success: true,
      message: "Snack added successfully",
      snack
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL SNACKS
export const getAllSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find().sort({
      createdAt: -1
    });

    res.status(200).json({
      success: true,
      total: snacks.length,
      snacks
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET SINGLE SNACK
export const getSingleSnack = async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);

    if (!snack) {
      return res.status(404).json({
        success: false,
        message: "Snack not found"
      });
    }

    res.status(200).json({
      success: true,
      snack
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// UPDATE SNACK
export const updateSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!snack) {
      return res.status(404).json({
        success: false,
        message: "Snack not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Snack updated successfully",
      snack
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE SNACK
export const deleteSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndDelete(
      req.params.id
    );

    if (!snack) {
      return res.status(404).json({
        success: false,
        message: "Snack not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Snack deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
