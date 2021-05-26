const express = require("express");
const router = express.Router();
const productController =require('../controller/product.controller');

router.get('/',productController.getList);
router.get('/product',productController.getByID);
router.get('/cart',productController.getListCart);

module.exports=router;
