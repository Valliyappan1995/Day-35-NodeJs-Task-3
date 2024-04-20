const express = require("express");
const mentorController = require("../controllers/mentor.controller");

const router = express.Router();

router.post("/create", mentorController.createMentor);
router.get("/all", mentorController.getAllMentors);

module.exports = router;