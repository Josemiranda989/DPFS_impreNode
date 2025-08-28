function guest (req,res,next){
    if(req.session.userLogged){
        console.log("El usuario está logueado");        
        return res.redirect('/users/profile')
    }
    next();
}
module.exports = guest