const express = require('express');
const router = express.Router()
const blogController = require('../controllers/blogController');
const blogValidator = require('../validators/blogValidator');

router.post('/create', blogValidator.create, blogController.create);
router.put('/update/:_id', blogValidator.update, blogController.update);
router.get('/getAll',  blogController.getAll);
router.get('/getOne/:_id', blogValidator.getOne, blogController.getOne);
router.delete('/delete/:_id',blogValidator.delete, blogController.delete);

module.exports = router;