// Server
const express = require("express");
const connectDB = require("./config/db");
// Path
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Defining routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/businesses", require("./routes/business"));

// Serve static assest in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // App get
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Port
const PORT = process.env.PORT || 5000;

// Message to show server start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
