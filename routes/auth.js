// Login users

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");
const auth = require("../middleware/auth");

const { validationResult, check } = require("express-validator");

// User Model
const User = require("../models/User");

// @route   GET api/auth
// @desc    GET logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // Get user from database
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post(
  "/",
  [
    // Check to Login a user
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password").exists(),
  ],
  async (req, res) => {
    //  Errors
    const errors = validationResult(req);

    // Check errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Fields
    const { email, password } = req.body;

    try {
      // Checking if a user exists
      let user = await User.findOne({ email });

      // If user does not exists
      if (!user) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      // If user is not a match
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Credentials" });
      }

      // If it does match
      // Payload
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Generating a Token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      // Errors

      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
