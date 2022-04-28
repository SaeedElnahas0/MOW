const express = require('express');
const router = express.Router();
const {
    createTemples,
    getAllTemples,
    getSingleTemple,
    updateTemples,
    deleteTemple
}
 = require('../controllers/templesController');

router.post('/', createTemples);
router.get('/', getAllTemples);
router.get('/:id', getSingleTemple);
router.patch('/:id', updateTemples);
router.delete('/:id', deleteTemple);

module.exports = router;