const express = require("express");
const router = express.Router();
const validateUser = require("../models/userSchema");

router.post("/login", validateUser, (req, res) => {
  const { value, errorMessage } = req;

  if (errorMessage) {
    return res.send(errorMessage);
  }

  res.json(value);
});

module.exports = router;
