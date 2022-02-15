const express = require('express');
const router = express.Router();
const {
    createWorldHeritage,
    getAllWorldHeritage,
    getSingleWorldHeritage,
    updateWorldHeritage,
    deleteWorldHeritage
} = require('../controllers/worldHeritageController');

router.post('/', createWorldHeritage);
router.get('/', getAllWorldHeritage);
router.get('/:id', getSingleWorldHeritage);
router.patch('/:id', updateWorldHeritage);
router.delete('/:id', deleteWorldHeritage);

module.exports = router;