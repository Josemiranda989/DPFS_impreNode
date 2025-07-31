const productsController = {
    catalog: function (req, res, next) {
        res.render("products/catalog.ejs", { title: "Express" });
    },
    detail: function (req, res, next) {
        const id = req.params.id
        res.render("products/detail.ejs", { title: "Express", id:id });
    },
};

module.exports = productsController;
