var express = require('express');
var router = express.Router();
const servicesController = require('../controllers/contactController');

/* GET home page. */
router.get('/', servicesController.index);

module.exports = router;
