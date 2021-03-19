const getVoter = require('./domain')

// fungsi-fungsi disini akan inisialisasi object module

const getLogin = (show) => {
    const getLoginVoter = new getVoter()
    return getLoginVoter.getLogin(show)
}

const voteCandidate = (show)=>{
    const voteCandidateVoter = new getVoter()
    return voteCandidateVoter.voteCandidate(show)
}

const liveVoter = (show)=>{
    const liveVoterVote = new getVoter()
    return liveVoterVote.liveVoter(show)
}

const notLogin = () => {
    const notLoginVoter = new getVoter()
    return notLoginVoter.notLogin()
}

const notVerif = () => {
    const notVerifVoter = new getVoter()
    return notVerifVoter.notVerif()
}

const failLogin = () => {
    const failLoginVoter = new getVoter()
    return failLoginVoter.failLogin()
}

module.exports = {
    getLogin,
    notLogin,
    notVerif,
    failLogin,
    voteCandidate,
    liveVoter
}