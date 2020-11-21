'use strict';

const giphy = require('giphy-api')(process.env.GIPHY_KEY);
const stringSimilarity = require('string-similarity');

const DEFAULT_QUERY_LIMIT = 100;

function bestMatch(query, results) {
  /*
    using getFirst yields terrible results.
    getBestMatch does too, but seems *slightly* better.
  */

  const comparison = stringSimilarity.findBestMatch(
    query,
    results.map(result => result.title),
  );

  return results[comparison.bestMatchIndex];
};

module.exports = {

  getBestMatch: async(query) => {
    const response = await giphy.search({
      q: query,
      limit: DEFAULT_QUERY_LIMIT,
    });

    return bestMatch(query, response.data);
  },

  getFirst: async(query) => {
    const response = await giphy.search({
      q: query,
      limit: 1,
    });

    return response.data[0];
  },

};
