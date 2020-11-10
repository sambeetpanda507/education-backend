const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collegeSchema = new Schema({
  collegeId: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  yearFounded: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  NoOfStudents: {
    type: Number,
    required: true,
  },
  courses: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("colleges", collegeSchema);
