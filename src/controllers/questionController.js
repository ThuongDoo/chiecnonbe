const Ques = require("../models/Ques");

const saveQues = async (req, res) => {
  const { questions } = req.body;
  await Ques.deleteMany({})
    .then(() => console.log("Collection cleared"))
    .catch((err) => console.error(err));
  await Ques.insertMany(questions, { ordered: false })
    .then((docs) => console.log("Bulk insert successful:", docs))
    .catch((err) => console.error("Partial insert error:", err));
  console.log(questions);

  res.status(200).json({ questions });
};

const getQues = async (req, res) => {
  const questions = await Ques.find();
  console.log(questions);

  res.status(200).json({ questions });
};

module.exports = { saveQues, getQues };
