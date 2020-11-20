'use strict';

const express = require('express');

const getKeywords = require('../middlewares/getKeywords');
const sendRequest = require('../middlewares/sendRequestAsResponse');

const routes = express.Router();

routes.get('/recipes', getKeywords, sendRequest);

module.exports = routes;
