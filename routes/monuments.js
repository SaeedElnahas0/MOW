const express = require('express');
const router = express.Router();
const {
    createMonuments,
    getAllMonuments,
    getSingleMonuments,
    updateMonuments,
    deleteMonuments
}
 = require('../controllers/monumentsController');

router.post('/', createMonuments);
router.get('/', getAllMonuments);
router.get('/:id', getSingleMonuments);
router.patch('/:id', updateMonuments);
router.delete('/:id', deleteMonuments);

module.exports = router;