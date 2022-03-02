const express = require('express');
const router = express.Router();
const {
    createWillVisit,
    getAllWillVisit,
    getSingleWillVisit
} = require('../controllers/willVisitController');

router.post('/', createWillVisit);
router.get('/', getAllWillVisit);
router.get('/:id', getSingleWillVisit);

module.exports = router;