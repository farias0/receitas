'use strict';

require('dotenv').config();
const express = require('express');
const recipes = require('./api/recipes');

const app = express();
const PORT_NUMBER = process.env.PORT;

app.use(express.json());
app.use(recipes);

app.listen(PORT_NUMBER, () => {
  console.log(`\n\n == LISTENING ON ${PORT_NUMBER} ==`);
});
