const path = require("path");
const express = require("express");
const router = express.Router();
const products = [];
// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
res.render("add-product", {
pageTitle: "Add Product",
path: "/admin/add-product",
formCSS: true,
productCSS: true,
activeAddProduct: true,
});
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
const price = Math.floor(Math.random() * 90) + 10;
const desc = "A very nice " + req.body.title;
products.push({ title: req.body.title, price: price, desc: desc });
res.redirect("/");
});

exports.routes = router;
exports.products = products;