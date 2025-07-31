var express = require('express');
const {catalog, detail} = require('../controllers/productsController');
var router = express.Router();

/* GET catalog page. */
router.get('/', catalog);

/* GET detail page. */
router.get('/detail/:id', detail);

module.exports = router;
