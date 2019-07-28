const express = require('express');
const router = require('./router');
const pool = require('./db/pool-factory')
const connectionMiddleware = require('./db/connection-middleware');
const app = express();

const port = 9000

// Custom middleware for connection pool
app.use(connectionMiddleware(pool));

app.use('/', router);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.toString() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});