const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twiter", (req, res) => {
  res.send("Hello Rishu to twitter!");
});

app.get("/youtube", (req, res) => {
  res.send("Hello Rishu to Youtube!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
