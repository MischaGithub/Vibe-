// Sign up users

const express = require("express");
const router = express.Router();

// @route   POST api/users
// @desc    Sign up a user
// @access  Public
router.post("/", (req, res) => {
  res.send("Sign up a user");
});

module.exports = router;
