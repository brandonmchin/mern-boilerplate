const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const elements = require('./routes/api/elements');
const connection = require('./config/db_connect');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan('short'));

// Connect to SQL database
connection.connect((err) => {
    if (err) throw err;
    console.log('Database connection established.');
});

app.get('/', (req, res) => {
    console.log();
    res.send('WELCOME');
});

// Routes
app.use('/api/elements', elements);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});