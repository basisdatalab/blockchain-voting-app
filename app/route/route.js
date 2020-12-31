const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../helpers/passport-configuration');


//inisialisasi handler lainnya disini

const adminHandler = require('../modules/administrator/handler/api_handler');

//untuk register admin dan login

// router.get('/register', adminHandler.register())
// router.get('/login', adminHandler.login())
router.get('/', adminHandler.notLogin)
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})
router.get('/success', adminHandler.isLoggedIn, adminHandler.showLogin)
router.get('/failed', adminHandler.notLogin)
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/success');
    });

router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

module.exports = router
