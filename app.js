const express = require("express");
const wiki = require("./wiki.js");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use("/wiki", wiki);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Example app listenng on port ${PORT}`);
});
