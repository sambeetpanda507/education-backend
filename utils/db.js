const mongoose = require("mongoose");
require("dotenv").config();

const db_uri = process.env.DB_URI;

const db = mongoose.connect(db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
