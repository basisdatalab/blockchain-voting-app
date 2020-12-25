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

module.exports = {
    getLogin,
    getRegister
};