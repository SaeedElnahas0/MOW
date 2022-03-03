const express = require('express');
const router = express.Router();
const {
    createVisited,
    getAllVisited,
    getSingleVisited
} = require('../controllers/visitedController');

router.post('/', createVisited);
router.get('/', getAllVisited);
router.get('/:id', getSingleVisited);

module.exports = router;