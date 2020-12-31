const express = require('express');
const app = express();
var router = require('./app/route/route');
const port = 3007;
const cors = require('cors')
require('./app/helpers/passport-configuration')
const passport = require('passport')

var cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
app.get('/admin', router)
app.use(cookieSession({
    name: 'voting-session',
    keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => console.log(`Contoh running listening port ${port}`))