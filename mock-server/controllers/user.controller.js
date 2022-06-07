'use strict'

const express = require('express');

const user = express.Router();

user.post('/log-in', function(req, res, next) {
  const responseBody = {};

  responseBody ? res.send(responseBody) : next();
});

user.post('/log-out', function(req, res, next) {
  const responseBody = {};

  responseBody ? res.send(responseBody) : next();
});

user.post('/sign-in', function(req, res, next) {
  const responseBody = {};

  responseBody ? res.send(responseBody) : next();
});

module.exports = user;
