function logged (req,res,next){
    if(req.session.userLogged){
        next()
    }
    return res.redirect('/users/login')
}
module.exports = logged