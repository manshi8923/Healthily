const express = require("express");
const {
  chatbotController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/chatbot", chatbotController);

module.exports = router;
