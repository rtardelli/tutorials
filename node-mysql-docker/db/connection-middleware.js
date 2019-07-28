module.exports = pool => (req, res, next) => {
  pool.getConnection((err, conn) => {
    if(err) return next(err);

    console.log('pool => get Connection');

    //add connection to requisition
    req.connection = conn;

    //pass the request to the next middleware
    next();

    //return the connection to the pool at the end of the response
    res.on('finish', () => req.connection.release());
  });
};