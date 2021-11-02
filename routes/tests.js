const express = require("express");
const router = express.Router();
const db = require("../db");
const tables = require("../db/table_names");

router.get("/", (request, response) => {
  response.render("test/landing");
});

router.get("/tables", (request, response) => {
  Promise.all(
    Object.keys(tables).map((tableName) =>
      db.any(`SELECT * FROM ${tables[tableName]}`).then((result) => ({
        tableName,
        result,
        fields: Object.keys(result[0] || {}),
      }))
    )
  )
    .then((results) => {
      response.render("test/tables", {
        tables: Object.keys(tables).map((t) => tables[t]),
        results,
      });
    })
    .catch((error) => {
      console.log({ error });
      response.json({ error });
    });
});

module.exports = router;
