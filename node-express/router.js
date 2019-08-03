const express = require('express');
const router = express.Router();
const logger = require('./logConfig');

logger.info('router module');

// define the home page route
router.get('/', (req, res) => {
  logger.debug("home page");
  res.send('Hello World');
});
// define the about route
router.get('/album', (req, res, next) => {
  logger.debug("get /album");
  req.connection.query('SELECT * FROM album', (err, result) => {
    if(err) return next(err);

    logger.debug("Result: " + result);
    res.json(result);
  });
});

router.get('/photo', (req, res, next) => {
  logger.debug("get /photo");
  req.connection.query('SELECT * FROM photo', (err, result) => {
    if(err) return next(err);

    logger.debug("Result: " + result);
    res.json(result);
  });
});

module.exports = router;