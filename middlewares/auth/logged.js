function logged (req, res, next) {
    if(!req.session.userLogged){
        console.log('El usuario no está logueado');        
        return res.redirect('/users/login')
    }
    next();
}
module.exports = logged