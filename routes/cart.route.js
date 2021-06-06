const express = require("express");
const router = express.Router();
const productController =require('../controller/product.controller');
const cartController =require('../controller/cart.controller');

router.get('/',productController.getListCart);
router.get('/add',cartController.add);
router.get('/remove',cartController.remove);

router.post('/order',cartController.order);

module.exports=router;