//Karena ini adalah domain yang berada pada repositories query, maka isinya hanya bisa get data

class Vote {
    async getVote(payload) {
        const vote = 'Kamu telah vote paslon 3';
        return vote;
    }
}

module.exports = Vote;