const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const studentRouter = require("./routers/student.Router");
const mentorRouter = require("./routers/mentor.router");
const assignstudentmentorRouter = require("./routers/assignstudtoMentor.router");
const connectDatabase = require("./config/database");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config/config.env") });
const app = express();
app.use(cors());
app.use(express.json());

connectDatabase();

app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
app.use("/assign-student-mentor", assignstudentmentorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my server!!!");
});

// Start the server
const PORT = process.env.PROD_SERVER_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
