const express = require("express");
const studentRouter = require("../controllers/student.controller");
const mentorRouter = require("../controllers/mentor.controller");
const assignstudentmentorRouter = require("../controllers/assign-student-mentor.controller");

const router = express.Router();

router.use("/students", studentRouter);
router.use("/mentors", mentorRouter);
router.use("/assign-student-mentor", assignstudentmentorRouter);

module.exports = router;
