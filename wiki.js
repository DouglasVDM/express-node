const express = require("express");
const router = express.Router();

// Home page route
router.get("/home", (req, res) => {
  res.send("Home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About page");
});

module.exports = router;
