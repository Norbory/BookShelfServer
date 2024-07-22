const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router");

const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// config cors
app.use(cors());

// routes
router(app);

module.exports = app;
