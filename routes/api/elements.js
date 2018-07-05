const express = require('express');
const router = express.Router();
const db = require('../../config/db_connect');


// @route   GET api/elements
// @desc    Get all elements
// @access  Public
router.get('/', (req, res) => {
    db.getConnection((err, connection) => {
        if (err) throw err;
        const query = 'SELECT * FROM elements';
        connection.query(query, (err, results) => {
            if (err) throw err;
            res.status(200);
            res.json(results);
            connection.release();
        });
    });
});

// @route   GET api/elements/:id
// @desc    Get element with id
// @access  Public
router.get('/:id', (req, res) => {
    const element_id = req.params.id;
    db.getConnection((err, connection) => {
        const query = 'SELECT * FROM elements WHERE element_id=?';
        connection.query(query, [element_id], (err, results) => {
            if (err) throw err;
            res.status(200);
            res.json(results);
            connection.release();
        });
    });
});

module.exports = router;