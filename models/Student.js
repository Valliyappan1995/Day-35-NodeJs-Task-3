const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    default: undefined,
    ref: "Mentor",
  },
});

const studentModel = mongoose.model("Student", studentSchema);
module.exports = studentModel;
