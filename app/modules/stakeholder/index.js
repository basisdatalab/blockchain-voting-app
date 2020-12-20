const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./AuthSetup');

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'StakeHolder',
    keys: ['key1', 'key2']
  }))

// Cek bahwa user telah login//
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// protected and unprotected routes
app.get('/', (req, res) => res.send('Login First'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// user login
app.get('/success', isLoggedIn, (req, res) => res.send(`Selamat Datang,  ${req.user.displayName} anda telah login!`))

// Auth Routes
app.get('/google/stakeholder', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))