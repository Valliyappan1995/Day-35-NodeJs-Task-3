const express = require("express");
const assignStudtoMenController = require("../controllers/assign-student-mentor.controller");

const router = express.Router();

router.put(
  "/assign-mentor/:studentId/:mentorId",
  assignStudtoMenController.assignStudenttoMentor
);
router.put(
  "/change-mentor/:studentId",
  assignStudtoMenController.changeMentorforStudent
);
router.get("/no-mentor", assignStudtoMenController.nomentorstudents);
router.get(
  "/mentor-students/:mentorId",
  assignStudtoMenController.MentortoStudents
);
router.get(
  "/previous-mentor/:studentId",
  assignStudtoMenController.getPreviousMentor
);

module.exports = router;
