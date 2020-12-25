const express = require('express');
const app = express();
// var router = require('./app/route/route');
const port = 3007;
const cors = require('cors')
require('./helpers/passport-configuration')
const passport = require('passport')

var cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
app.use(cookieSession({
    name: 'voting-session',
    keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.send('Login dengan alamat email telkomuniversity!')
    }
}

app.get('/failed', (req, res) => res.send('Gagal login!'))
app.get('/success', isLoggedIn, (req, res) => res.send(`Selamat datang diserver kami ${req.user.displayName} !`))
app.get('/', (req, res) => res.send('Kamu tidak sedang login!'))
app.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/success');
    });

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(port, () => console.log(`Contoh running listening port ${port}`))