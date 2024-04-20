const express = require("express");
const studentController = require("../controllers/student.controller");

const router = express.Router();

router.post("/create", studentController.createStudent);
router.get("/all", studentController.getAllStudents);

module.exports = router;
