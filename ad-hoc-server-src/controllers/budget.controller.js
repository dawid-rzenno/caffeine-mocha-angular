'use strict'

const express = require('express');
const budgetRepo = require('../repositories/budget.repository')

const budget = express.Router();
let lastUsedId = budget.length - 1;

function newId() {
  lastUsedId += 1;
  return lastUsedId;
}

budget.get('/all', function (req, res, next) {
  const responseBody = budgetRepo;

  responseBody ? res.send(responseBody) : next();
});

budget.get('/view/:id', function (req, res, next) {
  const id = req.params.id;
  const responseBody = budgetRepo.find(budget => budget.id.toString() === id.toString());

  responseBody ? res.send(responseBody) : next();
});

budget.post('/create', function (req, res, next) {
  const responseBody = {...req.body, id: newId()};

  const isValid = true;

  if (isValid && responseBody) {
    budgetRepo.push(responseBody);
    res.send(responseBody);
  } else {
    next();
  }
});

budget.put('/edit/:id', function (req, res, next) {
  const id = req.params.id;
  const budget = budgetRepo.find(budget => budget.id.toString() === id.toString());
  const responseBody = {...budget, ...req.body};

  responseBody ? res.send(responseBody) : next();
});

budget.delete('/delete/:id', function (req, res) {
  const id = req.params.id;

  budgetRepo[budgetRepo.findIndex(budget => budget.id.toString() === id.toString())].id = null; // mark as deleted

  res.send(null)
});

module.exports = budget;
