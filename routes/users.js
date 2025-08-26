var express = require('express');
const {login, register, processRegister, processLogin, profile} = require('../controllers/usersController');
const { uploadUser } = require('../middlewares/multer');
const logged = require('../middlewares/logged');
const guest = require('../middlewares/guest');
var router = express.Router();

// http://localhost:3000/users/login
/* Vista del formulario de inicio de sesion. */
router.get('/login', /* guest, */ login);
/* Procesar la informacion qeu viene del form. */
router.post('/login', processLogin);

// http://localhost:3000/users/register
/* Vista del formulario de nuevo usuario. */
router.get('/register', register);
/* Procesar la informacion que viene del form. */
router.post('/register', uploadUser.single('profile'), processRegister)

/* Vista de perfil de usuario. */
router.get('/profile', logged, profile);


module.exports = router;
