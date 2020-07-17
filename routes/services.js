var express = require('express');
var router = express.Router();
const servicesController = require('../controllers/servicesController');

/* GET home page. */
router.get('/', servicesController.index);

module.exports = router;
