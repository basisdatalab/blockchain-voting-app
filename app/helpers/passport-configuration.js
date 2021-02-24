const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    // User.findById(id, function (err, user) { untuk cek di db
    done(null, user);
    // });
});


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_CALLBACKURL
},
    function (accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) { untuk melihat di db ini
        return done(null, profile);
        // });
    }
));

// COMMENT SEMENTARA, callback tabrakan.
// passport.use(new GoogleStrategy({
//     clientID: "665311001771-tlkhbgkgcb0uvaqgsael87ati33sck0l.apps.googleusercontent.com",
//     clientSecret: "g-Ja7yVVU4LJituJUTlVsd-3",
//     callbackURL: "http://localhost:3007/stakeholder/get/callback"
// },
//     function (accessToken, refreshToken, profile, done) {
//         console.log(profile)
//         // User.findOrCreate({ googleId: profile.id }, function (err, user) { untuk melihat di db ini
//         return done(null, profile);
//         // });
//     }
// ));


// passport.use(new GoogleStrategy({
//     clientID: "665311001771-tlkhbgkgcb0uvaqgsael87ati33sck0l.apps.googleusercontent.com",
//     clientSecret: "g-Ja7yVVU4LJituJUTlVsd-3",
//     callbackURL: "http://localhost:3007/stakeholder/get/callback"
// },
//     function (accessToken, refreshToken, profile, done) {
//         console.log(profile)
//         // User.findOrCreate({ googleId: profile.id }, function (err, user) { untuk melihat di db ini
//         return done(null, profile);
//         // });
//     }
// ));

// passport.use(new GoogleStrategy({
//     clientID: "951427217505-jluqul4vr760eh8v0kur16260rft7u0u.apps.googleusercontent.com",
//     clientSecret: "86jl8_3SqlFTItJUDDUWb5pn",
//     callbackURL: "http://localhost:3007/api/v1/voting/voter/login/callback"
// },
//     function (accessToken, refreshToken, profile, done) {

//         // User.findOrCreate({ googleId: profile.id }, function (err, user) { untuk melihat di db ini
//         return done(null, profile);
//         // });
//     }
// ));