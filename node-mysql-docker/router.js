var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req, res) => {
  res.send('home page');
});
// define the about route
router.get('/album', (req, res) => {
  // TODO: Implement
  res.send('about page');
});

router.get('/photos', (req, res) => {
  // TODO: Implement
  res.send('about page');
});

module.exports = router;