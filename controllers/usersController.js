const usersController = {
    login: function (req, res, next) {
        res.render("users/login.ejs", { title: "Express" });
    },
    register: function (req, res, next) {
        res.render("users/register.ejs", { title: "Express" });
    }
};

module.exports = usersController;
