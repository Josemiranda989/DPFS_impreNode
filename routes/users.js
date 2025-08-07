var express = require('express');
const {login, register, indexUsers} = require('../controllers/usersController');
var router = express.Router();

// http://localhost:3000/users/login
/* GET login form page. */
router.get('/login', login);

// http://localhost:3000/users/register
/* GET register form page. */
router.get('/register', register);

module.exports = router;
