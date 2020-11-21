'use strict';

const giphy = require('../services/giphy');

const EXTERNAL_ERROR_MSG = 'Please try again later.';

module.exports = async(req, res, next) => {

  const tasks = req.body.recipes.map(
    recipe => giphy.getBestMatch(recipe.title),
  );

  let responses;
  try {
    responses = await Promise.all(tasks);
  } catch (error) {
    res.status(503).send(EXTERNAL_ERROR_MSG);
    return;
  }

  for (const index in responses) {
    req.body.recipes[index].gif = responses[index].url;
  };

  next();
};
