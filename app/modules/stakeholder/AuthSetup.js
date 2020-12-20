const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);s
});

passport.use(new GoogleStrategy({
    clientID: "936911630464-126nq4hi4ii4neqsvn964sa4ejim5o32.apps.googleusercontent.com",
    clientSecret: "NzdfwZ9g0APnnvFCP_qGWOpu",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    
    return done(null, profile);
  }
));