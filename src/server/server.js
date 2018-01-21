const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const knex = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');
const path = require('path');

const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const users = require('./routes/users');
app.use('/', users);

const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
// middleware to initialize Passport.js
// app.use(passport.initialize());
//
// passport.use(new LocalStrategy({
//   usernameField: 'email'
//   },
//   function(email, password, done) {
//     User.findOne({ email: email }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect email address.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// Add headers
// app.use(function (req, res, next) {
//
//     // Website you wish to allow to connect
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
//
//     // Request methods you wish to allow
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//     // Request headers you wish to allow
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.header('Access-Control-Allow-Credentials', true);
//
//     if (req.method === 'OPTIONS') {
//       console.log(req.headers.origin)
//       res.header('Access-Control-Allow-Origin', req.headers.origin);
//     } else {
//       res.header('Access-Control-Allow-Origin', '*')
//     }
//
//     // Pass to next layer of middleware
//     next();
// });

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// app.get('/', (req, res, next) => {
//   res.send('Welcome to our app!');
// })
//
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );

// add a user via SignUp component
// app.post('/', (req, res, next) => {
//   console.log(req.body)
//   const { email, hashed_password, firstName, lastName } = req.body;
//
//   if (!email || email.trim() === "") {
//     const err = new Error('Email must not be blank');
//     err.status = 400;
//
//     return next(err);
//   }
//
//   if (!hashed_password || hashed_password.trim() === "") {
//     const err = new Error('Password must not be blank');
//     err.status = 400;
//
//     return next(err);
//   }
//
//   knex('users')
//     .where('email', email)
//     .first()
//     .then((exists) => {
//       if (exists) {
//         const err = new Error('Email already exists');
//         err.status = 400;
//
//         throw err;
//       }
//
//       return bcrypt.hash(hashed_password, 12);
//     })
//     .then((hashed_password) => {
//       return knex('users').insert({ email, hashed_password, firstName, lastName });
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .catch(err => {
//       next(err);
//     });
// })








// function validateInput(data) {
//   let errors = {};
//
//   if (Validator.isNull(data.email)) {
//     errors.email = 'This field is required'
//   }
//
//   if (!Validator.isEmail(data.email)) {
//     errors.email = 'Email is invalid';
//   }
//
//   if (Validator.isNull(data.password)) {
//     errors.password = 'This field is required'
//   }
//
//   if (Validator.isNull(data.passwordConfirmation)) {
//     errors.passwordConfirmation = 'This field is required'
//   }
//
//   if (!Validator.equals(data.password, data.passwordConfirmation)) {
//     errors.passwordConfirmation = 'Passwords must match';
//   }
//
//   if (Validator.isNull(data.firstName)) {
//     errors.firstName = 'This field is required'
//   }
//
//   if (Validator.isNull(data.lastName)) {
//     errors.lastName = 'This field is required'
//   }
//
//   return {
//     errors,
//     isValid: isEmpty(errors)
//   }
// }



// app.post('/', (req, res, next) => {
//   console.log(req.body);
//   const { errors, isValid } = validateInput(req.body);
//
//   if (!isValid) {
//     res.status(400).json(errors)
//   }
// })


app.listen(PORT, () => {
  console.log('Connected to port: ' + PORT);
});
