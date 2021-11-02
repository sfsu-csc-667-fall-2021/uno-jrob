const express = require("express");
const router = express.Router();

router.get("/", function (request, response, next) {
  response.render("unauthenticated/landing");
});

router.get("/register", (request, response) => {
  response.render("unauthenticated/register");
});

router.get("/lobby", (request, response) => {
  response.render("authenticated/lobby");
});

module.exports = router;
