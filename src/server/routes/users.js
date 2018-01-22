const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return knex('users').where('email', data.email)
          .first()
          .then(user => {

            if (user) {
              errors.email = "A user with this email already exists"
            }
            return {
                    errors,
                    isValid: _.isEmpty(errors)
                  }
          })
}

// try to import it from module. need to enable ES6 syntax in node
function commonValidations(data) {
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
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'Authorization');

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

// router.get('/:identifier', (req, res, next) => {
//   const { email } = req.body;
//
//   console.log(req.body)
//   knex('users')
//     .select('email')
//     .where('email', email)
//     .then(user => {
//       res.json({ user });
//     })
// })

router.post('/', (req, res, next) => {
  // const { errors, isValid } = commonValidations(req.body);

  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { email, hashed_password, firstName, lastName } = req.body;

      knex('users')
        .where('email', email)
        .first()
        .then(() => {
          return bcrypt.hash(hashed_password, 12);
        })
        // .then((exists) => {
        //   if (exists) {
        //     const err = new Error('Email already exists');
        //     err.status = 400;
        //     throw err;
        //   }
        //
        //   return bcrypt.hash(hashed_password, 12);
        // })
        .then((hashed_password) => {
          return knex('users').insert({ email, hashed_password, firstName, lastName });
        })
        .then(() => {
          // res.status(200);
          res.json({ success: true });
        })
        .catch(err => {
          next(err);
        });
    } else {
      res.status(400).json(errors);
    }
  });
})


module.exports = router;
