const express = require('express');
const router = express.Router();
const {
    createHotel,
    getAllHotels,
    getSingleHotel,
    updateHotel,
    deleteHotel
} = require('../controllers/hotelsController');

router.post('/', createHotel);
router.get('/', getAllHotels);
router.get('/:id', getSingleHotel);
router.patch('/:id', updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;