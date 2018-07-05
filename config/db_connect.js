const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'sampledb'
// });

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'sampledb'
});

module.exports = pool;