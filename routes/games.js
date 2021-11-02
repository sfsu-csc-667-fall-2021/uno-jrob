const express = require("express");
const router = express.Router();

router.get("/:id", function (request, response, next) {
  const { id } = request.params;

  response.render("authenticated/game", { id });
});

module.exports = router;
