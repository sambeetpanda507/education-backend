const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routers/collegeRouter");
const db = require("./utils/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("<h1>Hello World</h1>");
});

app.use(router);

app.use((error, req, res, next) => {
  res.status(error.statusCode).json({
    message: error.message,
  });
});

const connect = async () => {
  try {
    const dbConnection = await db;
    const serverConnection = await app.listen(port);
    if (dbConnection && serverConnection) {
      console.log(
        `database connected | server listening on port : http://localhost:${port}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

connect();
