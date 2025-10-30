const bycrypt = require("bcryptjs");
const db = require('../database/models/index')

const usersController = {
    login: function (req, res, next) {
        res.render("users/login.ejs", {error : {
            msg: ''
        }});
    },
    processLogin: async (req, res) => {
        try {
            // Buscar el usuario a loguearse
        const userFound = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(userFound){
            // Comparar contraseña
            const isPassOk = bycrypt.compareSync(req.body.password, userFound.password)
            if(isPassOk) {
                // Crear una sesion con el usuario encontrado
                req.session.userLogged = userFound
                // Crear cookie para recordar usuario
                if(req.body.rememberme == 'on'){
                    res.cookie("email", userFound.email, {maxAge: 60*1000*60})
                }
                 return res.redirect('/users/profile')
            } else {
                 return res.send("La contraseña es incorrecta")
            }
        }
        // Redireccionar al form si los datos no son correctos
        console.log('Los datos no estan bien, o no existe el usuario o los ingresa mal')
        res.render("users/login", {error: {
            msg: 'Los datos ingresados no son correctos, intente nuevamente'
        }})
        } catch (error) {
            console.log(error);            
        }
        
    },
    register: function (req, res, next) { 
        res.render("users/register.ejs", { title: "Express" });
    },
    processRegister: async(req, res) => { 
        try {
        // Recibir la informacion y armar la estructura de un nuevo usuario
        let newUser = {
            name: req.body.name,
            direction: req.body.direction,
            email: req.body.email,
            profile: req.file?.filename || "default-profile.png",
            password: bycrypt.hashSync(req.body.password, 12),
        };
        // Agregar el nuevo registro
        await db.User.create(newUser)
        // Redireccionar al login
        res.redirect("/users/login");
        } catch (error) {
            console.log(error);
            
        }
       
    },
    profile: function (req, res, next) {
        res.render("users/profile.ejs");
    },
    processLogout: function(req,res) {
        req.session.destroy()
        res.clearCookie('email');
        res.redirect("/")
    }
};

module.exports = usersController;
