// const bycrypt = require("bcryptjs");
const db = require("../../database/models/index");

const usersController = {
    /* processLogin: async (req, res) => {
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
        
    }, */

    /*     processRegister: async (req, res) => {
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
            await db.User.create(newUser);
            // Redireccionar al login
            res.redirect("/users/login");
        } catch (error) {
            console.log(error);
        }
    }, */
    //! Pendiente modificación para obtener usuario por pk / id
    profile: async function (req, res, next) {
        try {
            const user = await db.User.findByPk(req.params.id,{
                attributes: {exclude: ['password']}
            })
            let response;
            
            if (!user) {
            response = {
                meta: {
                    status: 404,
                    path: `/api/users/${req.params.id}`,
                },
                message: `Usuario con ID ${req.params.id} no encontrado.`,
            }
            return res.status(404).json(response);
        }

            response = {
                meta: {
                    status: 200,
                    path: `/api/users/${req.params.id}` ,
                },
                data: user,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
    allUsers: async function (req, res) {
        try {
            const users = await db.User.findAll({
                attributes: {exclude: ['password']}
            });

            const response = {
                meta: {
                    status: 200,
                    count: users.length,
                    path: "/api/users",
                },
                data: users,
            };

            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = usersController;
