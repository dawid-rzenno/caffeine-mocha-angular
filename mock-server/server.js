'use strict'

/**
 * Module dependencies.
 */

let express = require('express');

const app = module.exports = express();

// create an error with .status. we
// can then use the property in our
// custom error handler (Connect respects this prop as well)

// function error(status, msg) {
//   const err = new Error(msg);
//   err.status = status;
//   return err;
// }

// if we wanted to supply more than JSON, we could
// use something similar to the content-negotiation
// example.

app.use('/api/budget', require('./controllers/budget.controller'));
app.use('/api/user', require('./controllers/user.controller'));

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
app.use(function (err, req, res) {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({error: err.message});
});

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
app.use(function (req, res) {
  res.status(404);
  res.send({error: "Path not found"})
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
