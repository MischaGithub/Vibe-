const express = require("express");
const router = express.Router();

// @route   GET api/businesses
// @desc    Get all businesses
// @access  Public
router.get("/", (req, res) => {
  res.send("Get all business");
});

// @route   POST api/businesses
// @desc    Add a businesses
// @access  Private
router.post("/", (req, res) => {
  res.send("Add business");
});

// @route   Put api/businesses/:id
// @desc    Add a businesses
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update business");
});

module.exports = router;
