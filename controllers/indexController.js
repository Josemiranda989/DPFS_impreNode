const indexController = {
    home: function (req, res, next) {
        res.render("index.ejs", {
            algo: "Esto es una variable que le paso desde el servidor",
        });
    },
    contact: function (req, res, next) {
        res.render("contact-us.ejs", { title: "Express" });
    },
};

module.exports = indexController;
