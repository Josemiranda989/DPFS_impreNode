const db = require("../database/models/index.js");

const indexController = {
    home: function (req, res, next) {
        res.render("index.ejs");
    },
    contact: function (req, res, next) {
        res.render("contact-us.ejs", { title: "Express" });
    },
    testDBWithAsyncAwait: async function (req, res) {
        try {
            const products = await db.Product.findAll();
            res.json(products);
        } catch (error) {
            console.log(error);            
        }
    },
    testDBWithThen: function (req, res) {
        db.Product.findAll()
        .then((products) => {
            res.json(products);
        })
        .catch(error => console.log(error))
    },
    categoriesTest: async (req, res) => {
        try {
            const categories = await db.Category.findAll()
            const colors = await db.Color.findAll()
            res.json({categories, colors})
        } catch (error) {
            console.log(error);            
        }
    },
    categoriesOpt2: (req, res) => {
        const CategoriesProm = db.Category.findAll()
        const ColorsProm = db.Color.findAll()

        Promise.all([CategoriesProm, ColorsProm])
        .then(([CategoriesResult, ColorsResult])=>{
            res.json({CategoriesResult, ColorsResult})
        }).catch(error => console.log(error))
    }
};

module.exports = indexController;
