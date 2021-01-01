const getAdmin = require('./domain');

//Fungsi-fungsi disini akan inisialisasi object module

const getLogin = () => {
    const getLogin = new getAdmin();
    return getLogin.getLogin();
};

const getRegister = () => {
    const getRegister = new getAdmin();
    return getRegister.getRegister();
}

const notLogin = () => {
    const notLogin = new getAdmin();
    return notLogin.notLogin();
}

const notVerif = () => {
    const notVerif = new getAdmin();
    return notVerif.notVerif();
}

const gagalLogin = () => {
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