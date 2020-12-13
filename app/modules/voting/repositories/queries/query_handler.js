const Voting = require('./domain');

//Fungsi-fungsi disini akan inisialisasi object module

const getVote = async (payload) => {
    const voting = new Voting();
    return voting.getVote(payload);
};

module.exports = {
    getVote
};