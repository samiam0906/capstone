// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// const keys = require('./keys');
//
// passport.use(
//   new GoogleStrategy({
//   // options for the google strategy
//   consumerKey: keys.google.clientID,
//   consumerSecret: keys.google.clientSecret,
//   callbackUrl: "/auth/google/redirect"
//   },
//   (token, tokenSecret, profile, done) => {
//   // passport callback function
//   User.findOrCreate({ googleId: profile.id }, (err, user) => {
//     return done(err, user);
//     })
//   })
// );
