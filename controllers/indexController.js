const indexController = {
    home: function (req, res, next) {
        res.render('index.ejs')
    },
    contact: function (req, res, next) {
        res.render("contact-us.ejs", { title: "Express" });
    },
};

module.exports = indexController;
