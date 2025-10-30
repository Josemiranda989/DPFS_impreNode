function admin (req,res,next){
    if(req.session.userLogged?.rol == 'ADMIN'){      
        console.log("El usuario es ADMIN");
          
        return next()
    }
    console.log("El usuario es no es ADMIN");
    return res.redirect('/users/login')
}
module.exports = admin