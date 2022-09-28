const mongoose = require('mongoose');

const animeInfo = new mongoose.Schema({});

const AnimeInfo = mongoose.model('Review', animeInfo);
module.exports = AnimeInfo;
