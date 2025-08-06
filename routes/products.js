var express = require('express');
const {catalog, detail, createForm, updateForm} = require('../controllers/productsController');
var router = express.Router();

/* GET catalog page. */
router.get('/', catalog);

/* GET detail page. */
router.get('/detail/:id', detail);

/* GET create form page. */
router.get('/create', createForm);

/* GET update form page. */
router.get('/update/:id', updateForm);

module.exports = router;
