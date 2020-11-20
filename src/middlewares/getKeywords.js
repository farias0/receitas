'use strict';

module.exports = (req, _, next) => {
  const keywordsAsString = req.query.i || '';
  req.body.keywords = keywordsAsString.split(',').sort();
  next();
};
