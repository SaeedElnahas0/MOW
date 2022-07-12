const express = require('express');
const router = express.Router();
const {
    createEvent,
    getAllEvents,
    getSingleEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/', getAllEvents);
router.get('/:id', getSingleEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;