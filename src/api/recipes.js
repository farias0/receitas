'use strict';

const express = require('express');

const getKeywords = require('../middlewares/getKeywords');
const getRecipes = require('../middlewares/getRecipes');
const sendRequest = require('../middlewares/sendRequestAsResponse');

const routes = express.Router();

routes.get('/recipes', getKeywords, getRecipes, sendRequest);

module.exports = routes;
