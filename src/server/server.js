const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const knex = require('../db/knex');
const bcrypt = require('bcrypt-as-promised');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
// middleware to initialize Passport.js
app.use(passport.initialize());

passport.use(new LocalStrategy({
  usernameField: 'email'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email address.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

// add a user via SignUp component
app.post('/signup', (req, res, next) => {
  const { email, hashed_password, firstName, lastName } = req.body;

  if (!email || email.trim() === "") {
    const err = new Error('Email must not be blank');
    err.status = 400;

    return next(err);
  }

  if (!hashed_password || hashed_password.trim() === "") {
    const err = new Error('Password must not be blank');
    err.status = 400;

    return next(err);
  }

  knex('users')
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        const err = new Error('This email is already associated with an account');
        err.status = 400;

        throw err;
      }

      return bcrypt.hash(hashed_password, 12);
    })
    .then((hashed_password) => {
      return knex('users').insert({ username, hashed_password, firstName, lastName });
    })
    .then(() => {
      res.status(200);
    })
    .catch(err => {
      next(err);
    });
})

app.listen(PORT, () => {
  console.log('Connected to port: ' + PORT);
});
