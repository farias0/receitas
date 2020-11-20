'use strict';

const express = require('express');

const routes = express.Router();

routes.get('/recipes', () => { console.log('hit /recipes'); });

module.exports = routes;
