'use strict';

const recipePuppy = require('../services/recipePuppy');

const ACCEPT_STATUS = [200];
const EXTERNAL_ERROR_MSG = 'Please try again later.';

function cleanName(name) {
  /*
    names from Recipe Puppy often come dirty with escape characters
    and other unreadable entities.
    this is a naive and half-hearted attempt to clean them.
  */

  return name.replace(/\n|\r|\t/g, '');
};

module.exports = async(req, res, next) => {

  // if would be cool to have a parameter specifying the # of queried recipies.
  // - currently using recipe puppy's default (10)

  let response;

  try {

    response = await recipePuppy.queryByIngredients(req.body.keywords);

    if (!ACCEPT_STATUS.includes(response.status)) {
      throw new Error('API Request Failed');
    }

  } catch (error) {
    res.status(503).send(EXTERNAL_ERROR_MSG);
    return;
  }

  const recipes = [];

  for (const recipe of response.data.results) {
    recipes.push({
      title: cleanName(recipe.title),
      ingredients: recipe.ingredients.split(', '),
      link: recipe.href,
    });
  }

  req.body.recipes = recipes;
  next();
};
