'use strict';

const MAX_KEYWORDS_COUNT = 3;
const MAX_KEYWORDS_ERROR_MSG = `You can't use more than ${MAX_KEYWORDS_COUNT} keywords.`;

module.exports = (req, res, next) => {
  const keywords = (req.query.i || '').split(',');

  if (keywords.length > MAX_KEYWORDS_COUNT) {
    res.status(400).send(MAX_KEYWORDS_ERROR_MSG);
    return;
  }

  req.body.keywords = keywords.sort();
  next();
};
