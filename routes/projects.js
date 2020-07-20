var express = require('express');
var router = express.Router();
const projectController = require('../controllers/projectController');

/* GET home page. */
router.get('/', projectController.index);
router.get('/:idProject', projectController.option);

module.exports = router;
