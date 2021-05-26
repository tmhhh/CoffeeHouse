const express = require("express");
const router = express.Router();
const productController =require('../controller/product.controller');

router.get('/',productController.getList);
router.post('/search',productController.search);
router.get('/cart',productController.getListCart);
router.get('/product',productController.getByID);

module.exports=router;
