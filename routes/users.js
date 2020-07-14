// Sign up users

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("config");

const { validationResult, check } = require("express-validator");

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

  async (req, res) => {
    //  Errors
    const errors = validationResult(req);

    // Check errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Req Body Fields
    const { name, email, password } = req.body;

    try {
      // Checking if the user exists
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // New User
      user = new User({
        name,
        email,
        password,
      });

      // Encrypting the user password with genSalt
      const salt = await bcrypt.genSalt(10);

      // Hash password which is being assigned to the user
      user.password = await bcrypt.hash(password, salt);

      // Saving the user in the db
      await user.save();

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
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
