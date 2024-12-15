const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    ques: {
      type: String,
    },
    answer: {
      type: String,
    },
  },
  {
    timestamps: true, // Bật timestamps
  }
);

module.exports = mongoose.model("Question", QuestionSchema);
