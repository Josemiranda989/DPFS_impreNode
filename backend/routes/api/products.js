var express = require("express");
var router = express.Router();
const {
    catalog,
    detail,
    createProduct,
    updateProduct,
    deleteProduct,
    createCategory,
    createColor,
    utils

} = require("../../controllers/api/productsController");
const { uploadProd } = require("../../middlewares/multer");


/* GET catalog page. */
router.get("/", catalog);

/* GET detail page. */
router.get("/detail/:id", detail);

// router.get("/create", admin , createForm);
router.post("/create", uploadProd.single('image'), createProduct);

// router.get("/update/:id", updateForm);
router.put("/update/:id",uploadProd.single('image'), updateProduct);

/* Delete process to delete product. */
router.delete("/delete/:id", deleteProduct);

/* GET forms utils pages. */
router.get("/utils",  utils);

/* POST new colors and categories. */
router.post('/new-category', createCategory)
router.post('/new-color', createColor)


module.exports = router;
