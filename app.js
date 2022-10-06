const express = require("express");
const app = express();
const port = 8000;

// EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(8000);
