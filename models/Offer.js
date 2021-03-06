// import mongoose
const mongoose = require("mongoose");

// create MongoDB model
const Offer = mongoose.model("Offer", {
  title: { type: String, minlength: 1, maxlength: 50, required: true },
  description: { type: String, minlength: 1, maxlength: 500, required: true },
  price: { type: Number, min: 1, max: 100000 },
  pictures: { type: Array },
  created: { type: Date, default: Date.now },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = Offer;
