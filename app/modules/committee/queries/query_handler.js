const getCommittee = require('./domain')

// fungsi-fungsi disini akan inisialisasi object module

const getLogin = (payload) => {
    const getLoginCommittee = new getCommittee()
    return getLoginCommittee.getLogin(payload)
}

const notLogin = () => {
    const notLoginCommittee = new getCommittee()
    return notLoginCommittee.notLogin()
}

const notVerif = () => {
    const notVerifCommittee = new getCommittee()
    return notVerifCommittee.notVerif()
}

const failLogin = () => {
    const failLoginCommittee = new getCommittee()
    return failLoginCommittee.failLogin()
}

module.exports = {
    getLogin,
    notLogin,
    notVerif,
    failLogin
}