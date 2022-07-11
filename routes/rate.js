const express = require('express');
const router = express.Router();
const { 
    createRate,
    getAllRates,
    getSingleRate,
    updateRate,
    deleteRate
} = require('../controllers/rateController');

router.post('/', createRate);
router.get('/', getAllRates);
router.get('/:id', getSingleRate);
router.patch('/:id', updateRate);
router.delete('/:id', deleteRate);

module.exports = router;