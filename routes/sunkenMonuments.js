const express = require('express');
const router = express.Router();
const {
    createSunkenMonument,
    getAllSunkenMonuments,
    getSingleSunkenMonument,
    updateSunkenMonument,
    deleteSunkenMonument
} = require('../controllers/sunkenMonumentsController');

router.post('/', createSunkenMonument);
router.get('/', getAllSunkenMonuments);
router.get('/:id', getSingleSunkenMonument);
router.patch('/:id', updateSunkenMonument);
router.delete('/:id', deleteSunkenMonument);

module.exports = router;