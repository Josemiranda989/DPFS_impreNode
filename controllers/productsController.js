const fs = require("fs"); // FileSystem -> Manejar Archivos
const path = require("path"); // Path -> Manejar Rutas

const productsPath = path.join(__dirname, "../", "data", "products.json");
const categoriesPath = path.join(__dirname, "../", "data", "categories.json");
const colorsPath = path.join(__dirname, "../", "data", "colors.json");

const productsController = {
    catalog: function (req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        res.render("products/catalog.ejs", { products });
    },
    detail: function (req, res, next) {
        const id = req.params.id;

        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));

        const prod = products.find((product) => {
            return product.id == id;
        });

        res.render("products/detail.ejs", { prod });
    },

    createForm: (req, res) => {
        // Categorias
        const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
        // Colores
        const colors = JSON.parse(fs.readFileSync(colorsPath, "utf8"));

        res.render("products/create.ejs", { categories, colors });
    },
    createProduct: (req, res) => {
        console.log("Req.file");
        console.log(req.file);
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        // Crear nuevo producto en base a lo ingresado en el form por el cliente
        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: req.file?.filename || "not-found.jpg",
            colors: req.body.colors,
            price: req.body.price,
        };
        // Agregar el nuevo prod al listado leido anteriormente
        products.push(newProduct);
        // Convertir a json ese listado de productos
        const productsJSON = JSON.stringify(products, null, " ");
        // Sobreescribir el json
        fs.writeFileSync(productsPath, productsJSON);
        // redireccionar
        res.redirect("/products");
    },
    updateForm: (req, res) => {
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        // Buscar por id
        const prod = products.find((prod) => {
            return prod.id == req.params.id;
        });
        // Categorias
        const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
        // Colores
        const colors = JSON.parse(fs.readFileSync(colorsPath, "utf8"));
        res.render("products/update.ejs", { prod, categories, colors });
    },
    updateProduct: (req, res) => {
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        // Recorrer el listado de productos y modificar el producto en caso de que se encuentre
        products.forEach((product) => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.image = req.file?.filename || product.image;
                product.category = req.body.category;
                product.colors = req.body.colors;
                product.price = req.body.price;
            }
        });
        // Convertir a JSON ese listado
        const productsJSON = JSON.stringify(products, null, " ");
        // Sobreescribir el json de productos
        fs.writeFileSync(productsPath, productsJSON);
        // Redireccionar al producto editado
        res.redirect(`/products/detail/${req.params.id}`);

        console.log("Se actualizo el producto", req.params.id);
    },
    deleteProduct: (req, res) => {
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));

        // Quitar del listado el producto elegido para eliminar
        const newProducts = products.filter(
            (product) => product.id != req.params.id
        );

        // Convertir a JSON ese listado
        const productsJSON = JSON.stringify(newProducts, null, " ");
        // Sobreescribir el json de productos
        fs.writeFileSync(productsPath, productsJSON);
        // Redireccionar al producto editado
        res.redirect(`/products`);

        console.log("Se elimino el producto con id", req.params.id);
    },
    utils: (req, res) => {
        // Categorias
        const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
        // Colores
        const colors = JSON.parse(fs.readFileSync(colorsPath, "utf8"));
        res.render("admin/utils.ejs", {categories, colors});
    },
    createCategory: (req, res) => {
        // Categorias
        const categories = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
        // Nueva categoria
        const newCategory = {
            id: categories.length + 1,
            name: req.body.name,
        };
        // Agregar nueva cat
        categories.push(newCategory);
        // Convertir a JSON ese listado
        const categoriesJSON = JSON.stringify(categories, null, " ");
        // Sobreescribir el json de productos
        fs.writeFileSync(categoriesPath, categoriesJSON);
        // Redireccionar al producto editado
        res.redirect(`/products/utils`);
    },
    createColor: (req, res) => {
        // Colores
        const colors = JSON.parse(fs.readFileSync(colorsPath, "utf8"));
        // Nueva categoria
        const newColor = {
            id: colors.length + 1,
            name: req.body.name,
            code: req.body.code,
        };
        // Agregar nueva cat
        colors.push(newColor);
        // Convertir a JSON ese listado
        const colorsJSON = JSON.stringify(colors, null, " ");
        // Sobreescribir el json de productos
        fs.writeFileSync(colorsPath, colorsJSON);
        // Redireccionar al producto editado
        res.redirect(`/products/utils`);
    },
};

module.exports = productsController;
