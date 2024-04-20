const Mentor = require("../models/Mentor");
const Student = require("../models/Student");

const assignStudenttoMentor = async (req, res, next) => {
  try {
    const { studentId, mentorId } = req.params;
    const student = await Student.findByIdAndUpdate(
      studentId,
      { mentor: mentorId },
      { new: true }
    );
    const mentor = await Mentor.findByIdAndUpdate(
      mentorId,
      { $addToSet: { students: studentId } },
      { new: true }
    );
    res.json({ student, mentor });
  } catch (error) {
    next(error);
  }
};

const changeMentorforStudent = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const { newMentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found." });
    }
    const newMentor = await Mentor.findById(newMentorId);
    if (!newMentor) {
      return res.status(404).json({ error: "New Mentor not found." });
    }

    student.mentor = newMentorId;
    await student.save();
    await Mentor.findByIdAndUpdate(
      newMentorId,
      { $addToSet: { students: studentId } },
      { new: true }
    );
    res.json({
      success: true,
      message: "Mentor changed successfully",
      student,
      newMentor,
    });
  } catch (error) {
    next(error);
  }
};

const nomentorstudents = async (req, res, next) => {
  try {
    const studentsWithoutmentors = await Student.find({ mentor: undefined });
    res.json({
      success: true,
      students: studentsWithoutmentors,
    });
  } catch (err) {
    next(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

const MentortoStudents = async (req, res, next) => {
  try {
    const mentorId = req.params.mentorId;
    const mentor = await Mentor.findById(mentorId).populate("students");
    res.json(mentor.students);
  } catch (error) {
    next(error);
  }
};

const getPreviousMentor = async (req, res, next) => {
  try {
    const studentId = req.params.studentId;
    const student = await Student.findById(studentId).populate("mentor");
    res.json(student.mentor);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  assignStudenttoMentor,
  changeMentorforStudent,
  nomentorstudents,
  MentortoStudents,
  getPreviousMentor,
};
