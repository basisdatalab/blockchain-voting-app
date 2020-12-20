const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router();
const bcrypt = require('bcryptjs');
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
// Register Form
router.get('/stakeholder/register', function(req, res){
    res.render('register');
  });
// Register Proccess
router.post('/stakeholder/register', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
  
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  
    let errors = req.validationErrors();
  
    if(errors){
      res.render('register', {
        errors:errors
      });
    } else {
      let newUser = new User({
        name:name,
        email:email,
        password:password
      });
  
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err, hash){
          if(err){
            console.log(err);
          }
          newUser.password = hash;
          newUser.save(function(err){
            if(err){
              console.log(err);
              return;
            } else {
              req.flash('success','Anda telah terdaftar sebagai Stakeholder, silahkan login');
              res.redirect('/google/stakeholder');
            }
          });
        });
      });
    }
  });
  
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
app.get('/stakeholder', (req, res) => res.send('Login First'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// user login
app.get('/success', isLoggedIn, (req, res) => res.send(`Selamat Datang,  ${req.user.displayName} anda telah login!`))

// Auth Routes
app.get('/stakeholder/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/stakeholder');
})

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))