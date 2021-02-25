const queryHandler = require('../queries/query_handler');
const { query } = require('express')
// const commandHandler = require('../commands/command_handler');

// Isi dari setiap fungsi disini adalah request validation

const showLogin = async(req,res)=>{
    const show = {
        name : req.user.displayName,
        email : req.user.emails[0].value,
        picture : req.user.photos[0].value
    }
    const result = await queryHandler.getLogin(show)
    return res.send(result)
}
const failedLogin = async (req, res) => {
    const result = await queryHandler.gagalLogin();
    return res.send(result);
}

const notLogin = async (req, res) => {
    const result = await queryHandler.notLogin();
    return res.send(result);
}

const isLoggedIn = async (req, res, next) => {
    if (req.user) {
       next();
    } else {
        const hasil = await queryHandler.notVerif();
        return res.send(hasil);
    }
}
const verifyLogin = async (req, res) => {
    try {
        const payload = {
            email : req.body.email
        }
    const result = await queryHandler.getLogin(show)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}
const verifyRegister = async (req, res) => {
    try {
        const show = {
            id : req.body.id,
            name : req.body.name,
            sid : req.body.sid,
            email : req.body.email
        }
    const result = await queryHandler.getRegister(show)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}
module.exports = {
    isLoggedIn,
    failedLogin,
    showLogin,
    notLogin,
    verifyRegister,
    verifyLogin
};