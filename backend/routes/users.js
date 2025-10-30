var express = require("express");
const {
    login,
    register,
    processRegister,
    processLogin,
    profile,
    processLogout,
} = require("../controllers/usersController");
const { uploadUser } = require("../middlewares/multer");
const guest = require("../middlewares/auth/guest");
const logged = require("../middlewares/auth/logged");
var router = express.Router();

// http://localhost:3000/users/login
/* Vista del formulario de inicio de sesion. */
router.get("/login", guest, login);
/* Procesar la informacion qeu viene del form. */
router.post("/login", processLogin);

// http://localhost:3000/users/register
/* Vista del formulario de nuevo usuario. */
router.get("/register", guest, register);
/* Procesar la informacion que viene del form. */
router.post("/register", uploadUser.single("profile"), processRegister);

/* Vista de perfil de usuario. */
router.get("/profile", logged, profile);

/* Proceso de cierre de sesion. */
router.get("/logout", processLogout);

module.exports = router;
