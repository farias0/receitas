'use strict';

module.exports = (req, res, next) => {
  const keywordsAsString = req.query.i || '';
  req.body.keywords = keywordsAsString.split(',').sort();
  next();
};
