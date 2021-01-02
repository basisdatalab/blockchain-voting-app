const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../helpers/passport-configuration')

//inisialisasi handler lainnya disini

// Stakeholder , harus pake kondisi 
const stakeHandler = require('../modules/stakeholder/handler/api_handler');


router.get('/', stakeHandler.notLogin)
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/stakeholder');
})
router.get('/success', stakeHandler.isLoggedIn, stakeHandler.showLogin)
router.get('/failed', stakeHandler.notLogin)
router.get('/login',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/stakeholder/success');
    });

module.exports = router
