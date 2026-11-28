import Customer from "../models/customerModel.js";

// ADD CUSTOMER
export const addCustomer = async (req, res) => {
  try {
    const {
      customerName,
      email,
      mobile,
      alternateMobile,
      address,
      city,
      state,
      pincode,
      customerType,
      status,
      notes
    } = req.body;

    if (!customerName || !email || !mobile || !address) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const customer = await Customer.create({
      customerName,
      email,
      mobile,
      alternateMobile,
      address,
      city,
      state,
      pincode,
      customerType,
      status,
      notes
    });

    res.status(201).json({
      success: true,
      message: "Customer added successfully",
      data: customer
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET ALL CUSTOMERS
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: customers.length,
      data: customers
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// GET SINGLE CUSTOMER
export const getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found"
      });
    }

    res.status(200).json({
      success: true,
      data: customer
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// UPDATE CUSTOMER
export const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: customer
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// DELETE CUSTOMER
export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Customer deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};