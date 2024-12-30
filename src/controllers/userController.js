const User = require("../models/User");

const saveScore = async (req, res) => {
  const { names, points, isSingle } = req.body;
  const users = names.map((name, index) => ({
    name: name,
    point: points[index],
    isSingle: isSingle,
  }));
  User.insertMany(users)
    .then((result) => {
      console.log("Documents inserted:", result);
    })
    .catch((error) => {
      console.error("Error inserting documents:", error);
    });
  res.status(200).json({ message: "success" });
};

const getScore = async (req, res) => {
  const isSingle = req.params.isSingle; // Lấy param id từ URL
  const users = await User.find({ isSingle });
  res.status(200).json({ users });
};

const deleteScore = async (req, res) => {
  const users = await User.deleteMany({});
  res.status(200).json({ users });
};

module.exports = { saveScore, getScore, deleteScore };
