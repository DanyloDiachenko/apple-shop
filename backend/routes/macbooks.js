const express = require('express');
const router = express.Router();
const macbooks = require('../data/macbooks');

router.get('/', (req, res) => {
    res.json(macbooks);
});

router.get('/:id', (req, res) => {
    const macbookId = parseInt(req.params.id, 10);

    const macbook = macbooks.find((macbook) => macbook.id === macbookId);

    if (macbook) {
        res.json(macbook);
    } else {
        res.status(404).json({ responce: 'Macbook is not found' });
    }
});

module.exports = router;