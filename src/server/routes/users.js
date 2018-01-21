const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();
const bcrypt = require('bcrypt-as-promised');

function validateInput(data) {
  console.log(data);

  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.hashed_password)) {
    errors.hashed_password = 'This field is required'
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required'
  }

  if (!Validator.equals(data.hashed_password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'This field is required'
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'This field is required'
  }

  console.log(errors)

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}

router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
      // console.log(req.headers.origin)
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
      res.header('Access-Control-Allow-Origin', '*')
    }

    // Pass to next layer of middleware
    next();
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  // validateInput(req.body);

  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    console.log("wooo");
    res.json({ success: true });
  } else {
    res.status(400).json(errors);
  }

  const { email, hashed_password, firstName, lastName } = req.body;

  // if (!email || email.trim() === "") {
  //   const err = new Error('Email must not be blank');
  //   err.status = 400;
  //
  //   return next(err);
  // }
  //
  // if (!hashed_password || hashed_password.trim() === "") {
  //   const err = new Error('Password must not be blank');
  //   err.status = 400;
  //
  //   return next(err);
  // }

  knex('users')
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        const err = new Error('Email already exists');
        err.status = 400;

        throw err;
      }

      return bcrypt.hash(hashed_password, 12);
    })
    .then((hashed_password) => {
      return knex('users').insert({ email, hashed_password, firstName, lastName });
    })
    .then(() => {
      res.status(200);
    })
    .catch(err => {
      next(err);
    });
})

//
router.post('/', (req, res, next) => {

})


module.exports = router;
