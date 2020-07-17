var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController');

/* GET home page. */
router.get('/', contactController.index);
router.post('/send', contactController.sent);

module.exports = router;
