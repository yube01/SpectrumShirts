const mongoose = require("mongoose")
const {Schema} = require("mongoose")
const modelOptions = require("./modelOption")

const favorite =  mongoose.model(
  "Favorite",
  mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    mediaType: {
      type: String,
      enum: ["tv", "movie"],
      required: true
    },
    mediaId: {
      type: String,
      required: true
    },
    mediaTitle: {
      type: String,
      required: true
    },
    mediaPoster: {
      type: String,
      required: true
    },
    mediaRate: {
      type: Number,
      required: true
    },
  }, modelOptions)
);


module.exports = favorite