const { get } = require('../../../route/route');
const getAdmin = require('./domain');

//Fungsi-fungsi disini akan inisialisasi object module

const getLogin = async () => {
    const getLogin = new getAdmin();
    return getLogin.getLogin();
};

const getRegister = async () => {
    const getRegister = new getAdmin();
    return getRegister.getRegister();
}

const notLogin = async () => {
    const notLogin = new getAdmin();
    return notLogin.notLogin();
}

const notVerif = async () => {
    const notVerif = new getAdmin();
    return notVerif.notVerif();
}

const gagalLogin = async () => {
    const gagalLogin = new getAdmin();
    return gagalLogin.gagalLogin();
}

module.exports = {
    getLogin,
    getRegister,
    notLogin,
    gagalLogin,
    notVerif
};