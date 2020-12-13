const express = require('express');
const router = express.Router();

//inisialisasi handler lainnya disini
const votingHandler = require('../modules/voting/handlers/api_handler');

router.get('/vote', votingHandler.vote);

module.exports = router;