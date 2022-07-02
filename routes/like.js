const express = require('express');
const router = express.Router();
const {
    createLike,
    getAllLikes
} = require('../controllers/likeController');

router.post('/', createLike);
router.get('/', getAllLikes);

module.exports = router;