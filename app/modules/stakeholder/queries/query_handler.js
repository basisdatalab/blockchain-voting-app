const getStake = require('./domain');

//Fungsi-fungsi disini akan inisialisasi object module

const getLogin = () => {
    const getLogin = new getStake();
    return getLogin.getLogin();
};

const getRegister = () => {
    const getRegister = new getStake();
    return getRegister.getRegister();
}

const notLogin = () => {
    const notLogin = new getStake();
    return notLogin.notLogin();
}

const notVerif = () => {
    const notVerif = new getStake();
    return notVerif.notVerif();
}

const gagalLogin = () => {
    const gagalLogin = new getStake();
    return gagalLogin.gagalLogin();
}

module.exports = {
    getLogin,
    getRegister,
    notLogin,
    gagalLogin,
    notVerif
};