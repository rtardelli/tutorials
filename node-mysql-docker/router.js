const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', (req, res) => {
  console.log("home page");
  res.send('Hello World');
});
// define the about route
router.get('/album', (req, res, next) => {
  console.log("get /album");
  req.connection.query('SELECT * FROM album', (err, result) => {
    if(err) return next(err);

    console.log("Result: " + result);
    res.json(result);
  });
});

router.get('/photo', (req, res, next) => {
  console.log("get /photo");
  req.connection.query('SELECT * FROM photo', (err, result) => {
    if(err) return next(err);

    console.log("Result: " + result);
    res.json(result);
  });
});

module.exports = router;