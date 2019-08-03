const log4js = require('log4js');

// Config log4js
log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'log/application.log' }
  },
  categories: {
    default: { appenders: [ 'out', 'app' ], level: 'debug' }
  }
});

const logger = log4js.getLogger();
logger.level = 'debug';

module.exports = logger;