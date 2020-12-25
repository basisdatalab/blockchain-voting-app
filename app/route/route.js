const express = require('express');
const router = express.Router();

//inisialisasi handler lainnya disini
const votingHandler = require('../modules/voting/handlers/api_handler');

const adminHandler = require('../modules/administrator/handler/api_handler');

// router.get('/', adminHandler.vote);

module.exports = router;