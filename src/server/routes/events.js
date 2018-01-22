const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authenticate');

router.use(function (req, res, next) {

  if (req.method === 'OPTIONS') {
      console.log('!OPTIONS');
      var headers = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      headers["Access-Control-Allow-Credentials"] = false;
      headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization";
      res.writeHead(200, headers);
      res.end();
}

    // Website you wish to allow to connect
    // res.header('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'Authorization', 'Content-Type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.header('Access-Control-Allow-Credentials', true);
    //
    // if (req.method === 'OPTIONS') {
    //   // console.log(req.headers.origin)
    //   res.header('Access-Control-Allow-Origin', 'Authorization', 'Content-Type', req.headers.origin);
    // } else {
    //   res.header('Access-Control-Allow-Origin', '*')
    // }

    // Pass to next layer of middleware
    next();
});

// authenticate middleware function is called first
// it will check for token of validated
// if everything is ok then we proceed with the
// status 201 route
// if there is no token or token is invaliad then
// middleware response with error and halts operation
router.post('/', authenticate, (req, res, next) => {
  // status 201 means created
  res.status(201).json({ success: true })
})

module.exports = router;
