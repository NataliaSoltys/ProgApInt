const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

router.post('/add-product', (req, res, next) => {
    const price = Math.floor(Math.random() * 90) + 10;
    const desc = 'A very nice ' + req.body.title;
    products.push({ title: req.body.title, price: price, desc: desc });
    res.redirect('/');
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.products = products;
exports.routes = router;

