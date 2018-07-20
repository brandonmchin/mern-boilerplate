const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const elements = require('./routes/api/elements');
const db = require('./config/db_connect');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('short'));

// Connect to SQL database
db.getConnection((err, connection) => {
    if (err) throw err;
    console.log('Database connection established.');
    connection.release();
});

app.get('/', (req, res) => {
    console.log();
    res.send('WELCOME TO THE SERVER ROOT DIRECTORY!');
});

// Routes
app.use('/api/elements', elements);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});