const db = require("../database/models/index.js");

const productsController = {
    catalog: async function (req, res, next) {
        try {
            const products = await db.Product.findAll();
            res.render("products/catalog.ejs", { products });
        } catch (error) {
            console.log(error);
        }
    },
    detail: async function (req, res, next) {
        try {
            const prod = await db.Product.findByPk(req.params.id);
            res.render("products/detail.ejs", { prod });
        } catch (error) {
            console.log(error);
        }
    },

    createForm: async (req, res) => {
        const categories = await db.Category.findAll();
        const colors = await db.Color.findAll();

        res.render("products/create.ejs", { categories, colors });
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
            res.redirect("/products");
        } catch (error) {
            console.log(error);
        }
    },
    updateForm: async (req, res) => {
        try {
            // Buscar por id
            const prod = await db.Product.findByPk(req.params.id);
            // Categorias
            const categories = await db.Category.findAll();
            // Colores
            const colors = await db.Color.findAll();
            res.render("products/update.ejs", { prod, categories, colors });
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

            console.log("Se actualizo el producto", req.params.id);

            // Redireccionar al producto editado
            res.redirect(`/products/detail/${req.params.id}`);
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
            console.log("Se elimino el producto con id", req.params.id);
            res.redirect(`/products`);
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
            res.render("admin/utils.ejs", { categories, colors });
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
        res.redirect(`/products/utils`);
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
        res.redirect(`/products/utils`);
    },
};

module.exports = productsController;
