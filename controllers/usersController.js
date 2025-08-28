const bycrypt = require("bcryptjs");
const { v4: uuid } = require("uuid");

const fs = require("fs"); // FileSystem -> Manejar Archivos
const path = require("path"); // Path -> Manejar Rutas

const usersPath = path.join(__dirname, "../", "data", "users.json");

const usersController = {
    login: function (req, res, next) {
        res.render("users/login.ejs", {error : {
            msg: ''
        }});
    },
    processLogin: (req, res) => {
        
        // Leer el json de usuarios
        const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
        // Buscar el usuario a loguearse
        const userFound = users.find(user => user.email == req.body.email);
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
    },
    register: function (req, res, next) {
        res.render("users/register.ejs", { title: "Express" });
    },
    processRegister: (req, res) => {
        // Leer el json de usuarios
        const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
        // Recibir la informacion y armar la estructura de un nuevo usuario
        let newUser = {
            id: uuid(),
            name: req.body.name,
            direction: req.body.direction,
            email: req.body.email,
            profile: req.file?.filename || "default-profile.png",
            rol: "USER",
            password: bycrypt.hashSync(req.body.password, 12),
        };
        // Agregar al Array de usuarios este nuevo
        users.push(newUser);
        // Actualizar el archivo con lo nuevo
        fs.writeFileSync(usersPath, JSON.stringify(users, null, " "));
        // Redireccionar al login
        res.redirect("/users/login");
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
