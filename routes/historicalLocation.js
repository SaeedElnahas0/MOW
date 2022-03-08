const express = require('express');
const router = express.Router();
const {
    createHistoricalLocation,
    getAllHistoricalLocation,
    getSingleHistoricalLocation,
    updateHistoricalLocation,
    deleteHistoricalLocation
} = require('../controllers/historicalLocationController');

router.post('/', createHistoricalLocation);
router.get('/', getAllHistoricalLocation);
router.get('/:id', getSingleHistoricalLocation);
router.patch('/:id', updateHistoricalLocation);
router.delete('/:id', deleteHistoricalLocation);

module.exports = router;