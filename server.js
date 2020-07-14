// Server

const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to Vibe a review site..." })
);

// Defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// Port
const PORT = process.env.PORT || 5000;

// Message to show server start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
