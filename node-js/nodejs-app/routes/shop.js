const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { prods: products, hasProds: products.length > 0, pageTitle: 'Shop', path: '/', productCSS: true, isShopPageActive: true });
});

module.exports = router;
