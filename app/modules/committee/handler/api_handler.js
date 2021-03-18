const { query } = require('express')
const queryHandler = require('../queries/query_handler')
const commandHandler = require('../commands/query_handler')

// isi dari setiap fungsi disini adalah request validation

const showLogin = async(req,res)=>{
    const payload = {
        name : req.user.displayName,
        email : req.user.emails[0].value,
        picture : req.user.photos[0].value
    }
    const result = await queryHandler.getLogin(payload)
    return res.send(result)
}

const notLogin = async (req,res) => {
    const result = await queryHandler.notLogin()
    return res.send(result)
}

const isLoggedIn = async (req,res,next) => {
    if(req.user) {
        next()
    } else {
        const result = await queryHandler.notVerif()
        return res.send(result)
    }
}

const failedLogin = async(req,res) => {
    const result = await queryHandler.failLogin()
    return res.send(result)
}

const verifyLogin = async (req, res) => {
    try {
        const payload = {
            email : req.body.email
        }
    const result = await queryHandler.getLogin(payload)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

const verifyRegister = async (req, res) => {
    try {
        const payload = {
            id : req.body.id,
            name : req.body.name,
            sid : req.body.sid,
            email : req.body.email
        }
    const result = await queryHandler.getRegister(payload)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

const verifyCandidate = async (req, res) => {
    try {
        const payload = {
            id_candidate : req.body.id_candidate,
            id_committee : req.body.id_committee,
            name : req.body.name,
            sid : req.body.sid,
        }
    const result = await commandHandler.getCandidate(payload)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

const verifyVoter = async (req, res) => {
    try {
        const payload = {
            id_voter : req.body.id_voter,
            id_admin : req.body.id_admin,
            name : req.body.name,
            sid : req.body.sid,
            email : req.body.email
        }
    const result = await commandHandler.regVoter(payload)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    showLogin,
    notLogin,
    isLoggedIn,
    failedLogin,
    verifyLogin,
    verifyRegister,
    verifyCandidate,
    verifyVoter
}