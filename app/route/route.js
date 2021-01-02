const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../helpers/passport-configuration')

//inisialisasi handler lainnya disini

// Administrator
const adminHandler = require('../modules/administrator/handler/api_handler');

router.get('/', adminHandler.notLogin)
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/admin');
})
router.get('/success', adminHandler.isLoggedIn, adminHandler.showLogin)
router.get('/failed', adminHandler.notLogin)
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/admin/success');
    });

// Stakeholder , harus pake kondisi 
//const stakeHandler = require('../modules/stakeholder/handler/api_handler');
//require('../modules/stakeholder/passport-config')

//router.get('/', stakeHandler.notLogin)
//router.get('/logout', (req, res) => {
    //req.session = null;
    //req.logout();
    //res.redirect('/stakeholder');
//})
// router.get('/success', stakeHandler.isLoggedIn, stakeHandler.showLogin)
// router.get('/failed', stakeHandler.notLogin)
// router.get('/login',
//     passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/google/callback',
//     passport.authenticate('google', { failureRedirect: '/failed' }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/stakeholder/success');
//     });

module.exports = router
