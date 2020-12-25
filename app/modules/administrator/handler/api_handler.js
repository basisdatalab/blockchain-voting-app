const queryHandler = require('../queries/query_handler');
const commandHandler = require('../commands/command_handler');

// Isi dari setiap fungsi disini adalah request validation

const login = async (req, res) => {
    // Logic request validation
    //Setelah request di validasi, variable yang mengandung request tersebut diterima ke handler selanjutnya
    // memanggil fungsi dari command handler untuk login, lalu 
    const result = await queryHandler.getLogin();
    return res.send(result);
};

module.exports = {
    login
};