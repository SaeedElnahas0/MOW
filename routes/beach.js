const express = require('express');
const router = express.Router();
const {
    createBeach,
    getAllBeachs,
    getSingleBeach,
    updateBeach,
    deleteBeach
} = require('../controllers/beachController');

router.post('/', createBeach);
router.get('/', getAllBeachs);
router.get('/:id', getSingleBeach);
router.patch('/:id', updateBeach);
router.delete('/:id', deleteBeach);

module.exports = router;