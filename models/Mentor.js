const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: Array,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const mentorModel = mongoose.model("Mentor", mentorSchema);
module.exports = mentorModel;
