const express = require("express");
const router = express.Router();

const {
  saveScore,
  getScore,
  deleteScore,
} = require("../controllers/userController");
router.post("/", saveScore);
router.get("/:isSingle", getScore);
router.delete("/", deleteScore);

module.exports = router;
