const getCommittee = require('./domain')

// fungsi-fungsi disini akan inisialisasi object module

const getLogin = (payload) => {
    const getLoginCommittee = new getCommittee.Login()
    return getLoginCommittee.getLogin(payload)
}

const notLogin = () => {
    const notLoginCommittee = new getCommittee.Login()
    return notLoginCommittee.notLogin()
}

const notVerif = () => {
    const notVerifCommittee = new getCommittee.Login()
    return notVerifCommittee.notVerif()
}

const failLogin = () => {
    const failLoginCommittee = new getCommittee.Login()
    return failLoginCommittee.failLogin()
}

const getRegister = (payload) => {
    const getRegisterCommittee = new getCommittee.Register()
    // console.log(getRegisterCommittee)
    return getRegisterCommittee.getRegister(payload)
}

module.exports = {
    getLogin,
    notLogin,
    notVerif,
    failLogin,
    getRegister
}