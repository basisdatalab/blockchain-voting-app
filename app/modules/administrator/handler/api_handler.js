const queryHandler = require('../queries/query_handler');
// const commandHandler = require('../commands/command_handler');
// Isi dari setiap fungsi disini adalah request validation

const showLogin = async (req, res) => {
    // Logic request validation
    //Setelah request di validasi, variable yang mengandung request tersebut diterima ke handler selanjutnya
    // memanggil fungsi dari command handler untuk login, lalu 
    const payload = {
        name: req.user.displayName,
        email: req.user.emails[0].value,
        picture: req.user.photos[0].value
    }
    const result = await queryHandler.getLogin(payload);
    return res.send(result);
};
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
            id : req.body.id
        }
    const result = await queryHandler.getLogin(payload)
    return res.json(result)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    showLogin,
    isLoggedIn,
    failedLogin,
    notLogin,
    verifyLogin
};