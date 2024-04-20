const Student = require("../models/Student");

const createStudent = async (req, res, next) => {
  try {
    const { name, batch, course } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is a required field." });
    }
    if (!batch) {
      return res.status(400).json({ error: "batch is a required field." });
    }
    if (!course) {
      return res.status(400).json({ error: "course is a required field." });
    }
    const existingStudent = await Student.findOne({ name });
    if (existingStudent) {
      return res.status(400).json({ error: "Student already exists." });
    }
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const allstudents = await Student.find();
    res.json(allstudents);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
};
