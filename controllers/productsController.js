const fs = require("fs"); // FileSystem -> Manejar Archivos
const path = require("path"); // Path -> Manejar Rutas

const productsPath = path.join(__dirname, "../", "data", "products.json");

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
        res.render("products/create.ejs");
    },
    createProduct: (req, res) => {
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        // Crear nuevo producto en base a lo ingresado en el form por el cliente
        const newProduct = {
            id: products.length + 1,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: "not-found.jpg",
            colors: req.body.colors,
            price: req.body.price,
        }
        // Agregar el nuevo prod al listado leido anteriormente
        products.push(newProduct)
        // Convertir a json ese listado de productos
        const productsJSON = JSON.stringify(products, null, ' ')
        // Sobreescribir el json
        fs.writeFileSync(productsPath, productsJSON)
        // redireccionar
        res.redirect('/products')
        
    },
    updateForm: (req, res) => {
        // Leer el json para utilizar
        const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));
        // Buscar por id
        const prod = products.find((prod) => {
            return prod.id == req.params.id
        })
        // Categorias
        const categories = ["Juguetes", "LLaveros", "Jarras", "Soportes", "Deco", "Accesorios"]
        // Colores
        const colors = ["Blanco", "Amarillo", "Verde", "Azul"]
        res.render("products/update.ejs", {prod, categories, colors});
    },
    updateProduct: (req, res ) => {
        console.log("Se actualizo el producto", req.params.id);
    },
    deleteProduct: (req, res) => {
        console.log("Se elimino el producto", req.params.id);
        
    }
};

module.exports = productsController;
