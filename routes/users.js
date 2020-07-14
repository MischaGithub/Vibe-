// Sign up users

const express = require("express");
const router = express.Router();

const { body, validationResult, check } = require("express-validator");

// User Model
const User = require("../models/User");

// @route   POST api/users
// @desc    Sign up a user
// @access  Public
router.post(
  "/",
  [
    // Check for each field
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a passowrd with 8 or more characters"
    ).isLength({ min: 8 }),
  ],

  (req, res) => {
    //  Errors
    const errors = validationResult(req);

    // Check errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("Passed");
  }
);

module.exports = router;
