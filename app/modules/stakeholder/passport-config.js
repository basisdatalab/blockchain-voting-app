const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // User.findById(id, function (err, user) { untuk cek di db
    done(null, user);
    // });
});


passport.use(new GoogleStrategy({
    clientID: "665311001771-tlkhbgkgcb0uvaqgsael87ati33sck0l.apps.googleusercontent.com",
    clientSecret: "0DTIaDjGI9I-NSkM85dwFj6t",
    callbackURL: "http://localhost:3007/stakeholder/google/callback"
},
    function (accessToken, refreshToken, profile, done) {

        // User.findOrCreate({ googleId: profile.id }, function (err, user) { untuk melihat di db ini
        return done(null, profile);
        // });
    }
));