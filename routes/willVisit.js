const express = require('express');
const router = express.Router();
const {
    createWillVisit,
    getAllWillVisit,
} = require('../controllers/willVisitController');

router.post('/', createWillVisit);
router.get('/', getAllWillVisit);


module.exports = router;