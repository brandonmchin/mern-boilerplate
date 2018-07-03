const express = require('express');
const router = express.Router();
const connection = require('../../config/db_connect');


// @route   GET api/elements
// @desc    Get all elements
// @access  Public
router.get('/', (req, res) => {
    const query = 'SELECT * FROM elements';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.status(200);
        res.json(results);
    });
});

// @route   GET api/elements/:id
// @desc    Get element with id
// @access  Public
router.get('/:id', (req, res) => {
    const element_id = req.params.id;
    const query = 'SELECT * FROM elements WHERE element_id=?';
    connection.query(query, [element_id], (err, results) => {
        if (err) throw err;
        res.status(200);
        res.json(results);
    });
});

module.exports = router;