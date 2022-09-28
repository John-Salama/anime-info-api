/* eslint-disable no-unused-vars */
const express = require('express');
const animeInfoController = require('../controllers/animeInfoController');

//get access to all params in all routes
const router = express.Router();

router.route('/').get().post();
