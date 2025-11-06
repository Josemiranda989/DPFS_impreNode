let express = require("express");
const { allUsers, profile, lastUser } = require("../../controllers/api/usersController");
let router = express.Router();

// Todos los usuarios
router.get('/', allUsers)

// Ultimo usuario
router.get('/last-user', lastUser)

// Usuario por pk
router.get('/:id', profile)



module.exports = router;
