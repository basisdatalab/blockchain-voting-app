const express = require('express');
const app = express();
// var router = require('./app/route/route');
const port = 3007;
const cors = require('cors')
const passport = require('passport')

const router = require('./app/route/route');

var cookieSession = require('cookie-session')
const bodyParser = require('body-parser');
app.use(cookieSession({
    name: 'voting-session',
    keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/admin', router);
app.use('/stakeholder', router);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(port, () => console.log(`Contoh running listening port ${port}`))