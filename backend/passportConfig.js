const User = require("./models/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(function (username, password, done) {
      // Find user in db
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        // Compare password with the user.password (hashed password)
        bcrypt.compare(password, user.password, (error, result) => {
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserailizeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
