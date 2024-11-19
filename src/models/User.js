const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    point: {
      type: Number,
    },
    isSingle: {
      type: Boolean,
    },
  },
  {
    timestamps: true, // Bật timestamps
  }
);

module.exports = mongoose.model("User", UserSchema);
