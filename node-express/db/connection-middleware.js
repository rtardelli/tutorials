const logger = require('../logConfig');

module.exports = pool => (req, res, next) => {
  pool.getConnection((err, conn) => {
    if(err) {
      logger.error("Erro ao conectar ao banco");
      return next(err);
    }
    logger.debug('pool => get Connection');

    //add connection to requisition
    req.connection = conn;

    //pass the request to the next middleware
    next();

    //return the connection to the pool at the end of the response
    res.on('finish', () => {
      logger.debug('release connection');
      req.connection.release()
    });
  });
};