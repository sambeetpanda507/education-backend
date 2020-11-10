const { response } = require("express");
const Colleges = require("../models/collegeSchema");
const Students = require("../models/studentSchema");

module.exports.getPopularColleges = async (req, res, next) => {
  try {
    const popularColleges = await Colleges.find(
      {},
      { collegeName: 1, _id: 0 }
    ).limit(10);
    if (popularColleges) {
      res.json({
        popularColleges: popularColleges,
        statusCode: 200,
      });
    } else {
      const error = new Error("unable to find the popular colleges");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

module.exports.getCollegesLocation = async (req, res, next) => {
  const location = req.query.location;
  const course = req.query.course;

  try {
    if (location) {
      const colleges = await Colleges.find({ state: location });
      res.json(colleges);
    } else if (course) {
      const colleges = await Colleges.find({ courses: course });
      res.json(colleges);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.getStudents = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  try {
    const students = await Students.find({ collegeId: collegeId });
    if (students) {
      res.json(students);
    } else {
      const error = new Error("unable to find students data");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

module.exports.getCollegeById = async (req, res, next) => {
  const collegeId = req.params.collegeId;
  try {
    const college = await Colleges.find({ collegeId: collegeId });

    if (college) {
      const state = college[0].state;
      const colleges = await Colleges.find({ state: state });
      if (colleges) {
        res.json({
          college: college,
          similarCollege: colleges,
          state: state,
          statusCode: 200,
        });
      }
    } else {
      const error = new Error("no such college found");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
