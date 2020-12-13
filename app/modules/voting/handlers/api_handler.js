const queryHandler = require('../repositories/queries/query_handler');

// Isi dari setiap fungsi disini adalah request validation

const vote = async (req, res) => {
    // Logic request validation

    //Setelah request di validasi, variable yang mengandung request tersebut diterima ke handler selanjutnya
    const result = await queryHandler.getVote();
    return res.send(result);
};

module.exports = {
    vote
};