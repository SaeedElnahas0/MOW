const express = require('express');
const router = express.Router();
const { createMuseum,
    getAllMuseums,
    getSingleMuseum,
    updateMuseum,
    deleteMuseum
} = require('../controllers/museumController');

router.post('/', createMuseum);
router.get('/', getAllMuseums);
router.get('/:id', getSingleMuseum);
router.patch('/:id', updateMuseum);
router.delete('/:id', deleteMuseum);

module.exports = router;