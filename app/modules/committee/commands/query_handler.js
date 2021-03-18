const getCommittee = require('./domain')

// fungsi-fungsi disini akan inisialisasi object module

const getCandidate = (payload) => {
    const getCandidate = new getCommittee()
    return getCandidate.regCandidate(payload)
}

const regVoter = (payload) => {
    const getCandidate = new getCommittee()
    return getCandidate.regVoter(payload)
}

module.exports = {
    getCandidate,
    regVoter
}