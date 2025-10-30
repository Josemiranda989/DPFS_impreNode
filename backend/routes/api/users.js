let express = require("express");
const { allUsers, profile } = require("../../controllers/api/usersController");
let router = express.Router();

// Todos los usuarios
router.get('/', allUsers)

// Usuario por pk
router.get('/:id', profile)



module.exports = router;
