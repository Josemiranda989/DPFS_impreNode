const db = require('../database/models/index.js')

const indexController = {
    home: function (req, res, next) {
        res.render('index.ejs')
    },
    contact: function (req, res, next) {
        res.render("contact-us.ejs", { title: "Express" });
    },
    testDB: async function(req, res) {
        const products = await db.Product.findAll()
        res.json(products)
    }
};

module.exports = indexController;
