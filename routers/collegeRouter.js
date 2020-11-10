const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/api/popularcolleges", userController.getPopularColleges);

router.get("/api/results", userController.getCollegesLocation);

router.get("/api/getStudents/:collegeId", userController.getStudents);

router.get("/api/getCollegeById/:collegeId", userController.getCollegeById);

module.exports = router;
