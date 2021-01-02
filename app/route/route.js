const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../helpers/passport-configuration')

//inisialisasi handler lainnya disini

const adminHandler = require('../modules/administrator/handler/api_handler');
const voterHandler = require('../modules/voter/handler/api_handler')

router.get('/', adminHandler.notLogin)
router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/admin');
})
router.get('/voter/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/api/v1/voting');
})
router.get('/success', adminHandler.isLoggedIn, adminHandler.showLogin)
router.get('/voter/login/success', voterHandler.isLoggedIn, voterHandler.showLogin)
router.get('/failed', adminHandler.notLogin)
router.get('/voter/login/failed', voterHandler.failedLogin)
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/voter/login',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/admin/success');
    });
router.get('/voter/login/callback',
    passport.authenticate('google', { failureRedirect: '/voter/login/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/api/v1/voting/voter/login/success');
    });


module.exports = router
