const fs = require("fs"); // FileSystem -> Manejar Archivos
const path = require("path"); // Path -> Manejar Rutas

const productsPath = path.join(__dirname, "../", "data", "products.json");

const productsController = {
    catalog: function (req, res, next) {
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'))
        res.render("products/catalog.ejs", {products});
    },
    detail: function (req, res, next) {
        const id = req.params.id;   
            
        const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'))
        
        const prod = products.find((product)=>{
            return product.id == id
        })

        res.render("products/detail.ejs", { prod });
    },

    createForm: (req,res) => {
        res.render('products/create.ejs')
    },
        updateForm: (req,res) => {
            console.log('Editando el producto con id' + req.params.id);
            
        res.render('products/update.ejs')
    }
};

module.exports = productsController;
