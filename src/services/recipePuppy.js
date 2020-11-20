'use strict';

const axios = require('axios');

async function query(params) {

  let requestUrl = process.env.RECIPEPUPPY_API_URL + '?';
  if (params.ingredients) requestUrl += 'i=' + params.ingredients.join() + '&';
  if (params.normal) requestUrl += 'q=' + params.normal.join() + '&';
  if (params.page) requestUrl += 'p=' + params.page;

  return await axios.get(requestUrl);
}

module.exports = {

  queryByIngredients: async(ingredients, page = 1) => {
    return await query({ ingredients, page });
  },

};
