const Mentor = require("../models/Mentor");

const createMentor = async (req, res, next) => {
  try {
    const { name, batch, course } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is a required field." });
    }
    if (!batch) {
      return res.status(400).json({ error: "Batch is a required field." });
    }
    if (!course) {
      return res.status(400).json({ error: "Course is a required field." });
    }
    const existingMentor = await Mentor.findOne({ name });
    if (existingMentor) {
      return res.status(400).json({ error: "Mentor already exists." });
    }

    const mentor = await Mentor.create(req.body);
    res.status(201).json({ message: "Mentor created successfully", mentor });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllMentors = async (req, res, next) => {
  try {
    const allMentors = await Mentor.find();
    res.json(allMentors);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMentor,
  getAllMentors,
};
