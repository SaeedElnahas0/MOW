const express = require('express');
const router = express.Router();
const {
    createCollectibles,
    getAllCollectibles,
    getSingleCollectibles,
    updateCollectibles,
    deleteCollectibles
} = require('../controllers/collectiblesController');

router.post('/', createCollectibles);
router.get('/', getAllCollectibles);
router.get('/:id', getSingleCollectibles);
router.patch('/:id', updateCollectibles);
router.delete('/:id', deleteCollectibles);

module.exports = router;