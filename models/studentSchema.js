const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentId: {
    type: Number,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  yearOfBatch: {
    type: String,
    required: true,
  },
  collegeId: {
    type: Number,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("students", studentSchema);
