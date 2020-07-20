const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { validationResult, check } = require("express-validator");

// User Model
const User = require("../models/User");
const Business = require("../models/Business");

//@route    GET api/business
// @desc    Get all business
// @access  Public
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find({});
    res.json(businesses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    GET api/business
// @desc    Get all business
// @access  Public
router.get("/", async (req, res) => {
  try {
    const catergory = await Business.find({ $text: { $search: "" } });
    res.json(catergory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    POST api/business
// @desc    Add a business
// @access  Private
router.post(
  "/",
  [
    [
      check("category", "Category is required").not().isEmpty(),
      check("location", "Location is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    //  Errors
    const errors = validationResult(req);

    // Check errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Pulling out the info
    const {
      image_url,
      name,
      review_count,
      phone,
      rating,
      address,
      location,
      category,
    } = req.body;

    try {
      const newBusiness = new Business({
        image_url,
        name,
        review_count,
        phone,
        rating,
        address,
        location,
        category,
      });

      const business = await newBusiness.save();
      res.json(business);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
