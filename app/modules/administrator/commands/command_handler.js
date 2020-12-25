// inisialisasi object dari command_handler

const admin = require('./domain');


const adminLogin = async () => {
    const login = new admin();
    return login.login();
}

module.exports = {
    adminLogin,

};


