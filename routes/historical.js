const express = require('express');
const router = express.Router();
const {
    createHistorical,
    getAllHistoricals,
    getSingleHistorical,
    updateHistorical,
    deleteHistorical
} = require('../controllers/historicalController');

router.post('/', createHistorical);
router.get('/', getAllHistoricals);
router.get('/:id', getSingleHistorical);
router.patch('/:id', updateHistorical);
router.delete('/:id', deleteHistorical);

module.exports = router;