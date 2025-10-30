const db = require('../../database/models/index')

async function userLogged(req, res, next) {
    // Pregunta si hay usuario logueado
    if (req.session && req.session.userLogged) {
        // Setea nuevas variables locales
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
        res.locals.isAdmin = req.session.userLogged.rol == "ADMIN" ? true : false;
    }

    if(!req.session.userLogged && req.cookies.email){

        // Buscar el usuario a loguearse
        const userFound = await db.User.findOne({
            where: {
                email: req.cookies.email
            }
        }) 
        if(userFound){
            res.locals.isLogged = true;
            req.session.userLogged = userFound;
            res.locals.userLogged = userFound
            res.locals.isAdmin = userFound.rol == "ADMIN" ? true : false;
        }
    }
    // Continua con la pila de tareas
    next();
}
module.exports = userLogged;
