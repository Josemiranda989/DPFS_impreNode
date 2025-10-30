const db = require("../../database/models/index.js");

const productsController = {
    catalog: async function (req, res, next) {
        try {
            const products = await db.Product.findAll();
            const response = {
                meta: {
                    status: 200,
                    count: products.length,
                    path: "/api/products",
                },
                data: products,
            };
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },
detail: async function (req, res, next) {
    try {
        const prod = await db.Product.findByPk(req.params.id);
        let response;
        
        if (!prod) {
            response = {
                meta: {
                    status: 404,
                    path: `/api/products/${req.params.id}`,
                },
                message: `Producto con ID ${req.params.id} no encontrado.`,
            }
            return res.status(404).json(response);
        }

        response = {
            meta: {
                status: 200,
                path: `/api/products/${req.params.id}`,
            },
            data: prod,
        };
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            meta: {
                status: 500,
                path: `/api/products/${req.params.id}`,
            },
            message: "Error interno del servidor.",
        });
    }
},


    createProduct: async (req, res) => {
        try {
            // Armamos el nuevo producto en base a lo que  viene en el formulario
            const newProduct = {
                name: req.body.name,
                description: req.body.description,
                image: req.file?.filename || "not-found.jpg",
                price: req.body.price,
                category_id: req.body.category,
                color_id: req.body.colors,
            };
            // Insertamos el nuevo registro en nuestra tabla
            await db.Product.create(newProduct);
            // Redireccionamos
            res.json({ msg: "Success" });
        } catch (error) {
            console.log(error);
        }
    },

    updateProduct: async (req, res) => {
        try {
            // Buscar el producto a editar
            const product = await db.Product.findByPk(req.params.id);

            const productUpdated = {
                name: req.body.name,
                description: req.body.description,
                image: req.file?.filename || product.image,
                category_id: req.body.category,
                color_id: req.body.colors,
                price: req.body.price,
            };

            await db.Product.update(productUpdated, {
                where: { id: req.params.id },
            });

            // Redireccionar al producto editado
            res.json({ msg: "Success" });
        } catch (error) {
            console.log(error);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await db.Product.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.json({ msg: "Success" });
        } catch (error) {
            console.log(error);
        }
    },
    utils: async (req, res) => {
        try {
            // Categorias
            const categories = await db.Category.findAll();
            // Colores
            const colors = await db.Color.findAll();
            res.json({ categories, colors });
        } catch (error) {
            console.log(error);
        }
    },
    createCategory: async (req, res) => {
        // Nueva categoria
        const newCategory = {
            name: req.body.name,
        };
        // Agregar nuevo registro
        await db.Category.create(newCategory);
        // Redireccionar al producto editado
        res.json({ msg: "Success" });
    },
    createColor: async (req, res) => {
        // Nueva categoria
        const newColor = {
            name: req.body.name,
            code: req.body.code,
        };
        // Agregar nueva cat
        await db.Color.create(newColor);
        // Redireccionar al producto editado
        res.json({ msg: "Success" });
    },
};

module.exports = productsController;
