const mongoose = require("mongoose");

// User Schema
const BusinessSchema = mongoose.Schema({
  business: {
    image_url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    review_count: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    catergory: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("business", BusinessSchema);
