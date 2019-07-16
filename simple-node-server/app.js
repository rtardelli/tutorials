const express = require('express');
const router = require('./router');

var app = express()

const port = 9000

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})