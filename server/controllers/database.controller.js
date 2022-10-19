'use strict'

const express = require("express");
const mysql = require("mysql");
const {CREATE_USER_TABLE_QUERY} = require("../queries/create-user-table.query");
const {CREATE_USER_TABLE_QUERY_KEY} = require("../queries/create-user-table.query");

const database = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const queryIdMap = new Map([
  [CREATE_USER_TABLE_QUERY_KEY, CREATE_USER_TABLE_QUERY]
]);

const router = express.Router();
router.get('/sql', function (req, res, next) {

  const queryIdParam = req.params['queryId'];
  if (queryIdParam) {

    const query = queryIdMap.get(queryIdParam);
    if (query) {

      database.query(query, (err) => {
        if (err) throw err;

        res.ok = true;
        res.send('Table created!')
      });

    } else {
      throw new Error(`Could not match any query with ${queryIdParam}`)
    }
  } else {
    throw new Error(`Couldn't find queryId in request parameters.`);
  }
});

module.exports = router;
