const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES //

// create aticle

// get all articles

// get an article

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
