'use strict';

module.exports = (req, res, next) => {
  res.json(req.body);
  next();
};
