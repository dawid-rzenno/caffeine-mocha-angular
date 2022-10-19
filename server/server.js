'use strict'

require('dotenv').config({path: __dirname + '/.env'});

const express = require('express');
const app = express();

app.use('/api/database', require('./controllers/database.controller'));
app.use('/api/budget', require('./controllers/budget.controller'));
app.use('/api/user', require('./controllers/user.controller'));

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.send({error: err.message});
});

app.use(function (req, res) {
  res.status(404);
  res.send({error: "Path not found"})
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
