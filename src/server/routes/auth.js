const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');
// const bcrypt = require('bcrypt-as-promised');
const bcrypt = require('bcrypt');
const Validator = require('validator');
const _ = require('lodash');
const isEmpty = _.isEmpty();
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/', (req, res, next) => {
  const { identifier, password } = req.body;
  console.log("Req.body is: ", req.body)

  knex('users')
    .where('email', identifier)
    .first()
    .then(user => {
      if (user) {
        // compare password
        if (bcrypt.compareSync(password, user.hashed_password)) {
          const token = jwt.sign({
            id: user.id,
            email: user.email
          }, config.jwtSecret);
          res.json({ token })
        } else {

            res.status(401).json({ errors: { form: 'Invalid Credentials' } })
        }
      } else {

        res.status(401).json({ errors: { form: 'Invalid Credentials' } })
      }
    })
})

// const passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;
// middleware to initialize Passport.js
// router.use(passport.initialize());
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

// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     res.redirect('/users/' + req.user.username);
//   });

//auth logIn
// router.get('/login', (req, res, next) => {
//   res.render()
// });

// auth logout
// router.get('/logout', (req, res, next) => {
//   // handle with passport
//   res.sent("logging out")
// });

// auth with google
// router.get('/google', passport.authenticate("google", {
//   scope: ["profile"]
// }));

// callback route for google to rediret to
// router.get('/google/redirect', (req, res, next) => {
//   res.send("you reached the callback uri")
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// });

module.exports = router;
