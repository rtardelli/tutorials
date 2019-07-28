const mysql = require('mysql');

/* 
  Create a connection pool. Search the host, user and password in environment variables.
  Best use implicit object like proccess.env.HOST, proccess.env.USER, proccess.env.PASSWORD
  and proccess.env.DATABASE
*/ 
const pool  = mysql.createPool({
  connectionLimit : 10,
  host : 'localhost',
  user : 'userone',
  password : 'passwordone',
  database : 'test-db'
});

console.log('pool => criado');

pool.on('release', () => console.log('pool => conexão retornada'));

/* Every time the application finishes, all connections of the pool should close. 
For that, using the proccess implicit object, it's set a SIGINT evento fired
when the application is finished 
*/
process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
); 

module.exports = pool;