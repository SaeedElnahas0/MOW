const express = require('express');
const router = express.Router();
const {
    createTomb,
    getAllTombs,
    getSingleTomb,
    updateTomb,
    deleteTomb
}
 = require('../controllers/tombsController');

router.post('/', createTomb);
router.get('/', getAllTombs);
router.get('/:id', getSingleTomb);
router.patch('/:id', updateTomb);
router.delete('/:id', deleteTomb);

module.exports = router;