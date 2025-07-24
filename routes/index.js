var express = require('express');
const {home, contact} = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', home);

/* GET contact page. */
router.get('/contact', contact);

module.exports = router;
