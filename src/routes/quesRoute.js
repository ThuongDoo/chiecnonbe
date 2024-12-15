const express = require("express");
const router = express.Router();

const { saveQues, getQues } = require("../controllers/questionController");
router.post("/", saveQues);
router.get("/", getQues);

module.exports = router;
