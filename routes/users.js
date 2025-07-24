var express = require('express');
const {login, register} = require('../controllers/usersController');
var router = express.Router();

/* GET login form page. */
router.get('/login', login);

/* GET register form page. */
router.get('/register', register);

module.exports = router;
