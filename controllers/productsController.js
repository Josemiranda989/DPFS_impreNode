const productsController = {
    catalog: function(req, res, next) {
  res.render('products/catalog.ejs', { title: 'Express' });
},
    detail: function(req, res, next) {
  res.render('products/detail.ejs', { title: 'Express' });
}
}

module.exports = productsController