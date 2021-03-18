const express = require("express");
const app = express();
// var router = require('./app/route/route');
const cors = require("cors");
const passport = require("passport");
const router = require("./app/route/route");
require("dotenv").config();

console.log(process.env);
app.use(cors());

const port = process.env.PORT;

var cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
app.use(
  cookieSession({
    name: "voting-session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/voting", router);

app.listen(port, () => console.log(`running listening port ${port}`));
