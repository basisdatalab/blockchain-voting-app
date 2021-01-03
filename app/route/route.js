const express = require('express');
const router = express.Router();
const passport = require('passport')
require('../helpers/passport-configuration')

// inisialisasi handler lainnya disini  


const stakeHandler = require('../modules/stakeholder/handler/api_handler');
const adminHandler = require('../modules/administrator/handler/api_handler');

// Stakeholder
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

router.get('/get/callback',
    passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        console.log(req.user._json.email)
        
        
        if (req.user._json.email == "rlzmtnck@student.telkomuniversity.ac.id") { // kondisi jika email admin , maka akan redirect ke /admin/success
        res.redirect('/admin/success');
            
        } else {
            res.redirect('/stakeholder/success');
        }
    });
    
// Admin
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

module.exports = router
