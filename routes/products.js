var express = require("express");
const {
    catalog,
    detail,
    createForm,
    updateForm,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productsController");
var router = express.Router();

// http://localhost:3000/products/
/* GET catalog page. */
router.get("/", catalog);

// http://localhost:3000/products/detail/1
/* GET detail page. */
router.get("/detail/:id", detail);

/* GET create form page. */
router.get("/create", createForm);

router.post("/create", createProduct);

/* GET update form page. */
router.get("/update/:id", updateForm);
router.put("/update/:id", updateProduct);

router.delete("/delete/:id", deleteProduct);

module.exports = router;
