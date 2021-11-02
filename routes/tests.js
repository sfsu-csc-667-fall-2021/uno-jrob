const express = require("express");
const router = express.Router();
const db = require("../db");
const tables = require("../db/table_names");

router.get("/", (request, response) => {
  db.any(
    `INSERT INTO test_table ("testString") VALUES ('Hello at ${Date.now()}')`
  )
    .then((_) => db.any("SELECT * FROM test_table"))
    .then((result) => response.json(result))
    .catch((error) => {
      console.log(error);
      response.json({ error });
    });
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
      console.log("RESULTS", results);
      response.render("test/tables", {
        tables: Object.keys(tables).map((t) => tables[t]),
        results,
      });
    })
    .catch((error) => {
      console.log(error);
      response.json({ error });
    });
});

module.exports = router;
