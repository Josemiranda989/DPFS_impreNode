var express = require('express');
const {home, contact, testDB, testDBWithThen, testDBWithAsyncAwait, categoriesTest, categoriesOpt2} = require('../controllers/indexController');
var router = express.Router();

// http://localhost:3000/
/* GET home page. */
router.get('/', home);

// http://localhost:3000/contact
/* GET contact page. */
router.get('/contact', contact);

router.get('/test-db', categoriesOpt2)

module.exports = router;
