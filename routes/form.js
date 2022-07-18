const express = require('express');
const router = express.Router();
const {
    createForm,
    getAllForms,
    getSingleForm,
    updateForm,
    deleteForm
} = require('../controllers/formController');

router.post('/', createForm);
router.get('/', getAllForms);
router.get('/:id', getSingleForm);
router.patch('/:id', updateForm);
router.delete('/:id', deleteForm);

module.exports = router;