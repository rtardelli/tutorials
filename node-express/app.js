const express = require('express');
const compression = require('compression');
const logger = require('./logConfig');
const router = require('./router');
const pool = require('./db/pool-factory')
const connectionMiddleware = require('./db/connection-middleware');
const app = express();

// Config port
const port = 4000

// Middleware for compression
app.use(compression());

// Custom middleware for connection pool
app.use(connectionMiddleware(pool));

app.use('/', router);

// Error middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ error: err.toString() });
});

app.listen(port, () => {
  logger.debug(`Log4js - Example app listening on port ${port}!`);
});