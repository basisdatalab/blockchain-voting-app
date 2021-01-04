const { query } = require('express')
const queryHandler = require('../queries/query_handler')

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
    if(req.user){
        next()
    }else{
        const result = await queryHandler.notVerif()
        return res.send(result)
    }
}

const failedLogin = async(req,res) => {
    const result = await queryHandler.failLogin()
    return res.send(result)
}

module.exports = {
    showLogin,
    notLogin,
    isLoggedIn,
    failedLogin
}