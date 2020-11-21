'use strict';

const express = require('express');

const getKeywords = require('../middlewares/getKeywords');
const getRecipes = require('../middlewares/getRecipes');
const getRecipesGifs = require('../middlewares/getGifsForRecipes');
const sendRequest = require('../middlewares/sendRequestAsResponse');

const routes = express.Router();

routes.get('/recipes', getKeywords, getRecipes, getRecipesGifs, sendRequest);

module.exports = routes;
