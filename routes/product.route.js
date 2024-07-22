const express=require("express");
const Product = require("../models/product.model.js");
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/product.controller.js');


router.get('/',getProducts);

router.post("/",createProduct);

router.get("/:id",getProduct);

//update Product

router.put("/:id",updateProduct);

//delete

router.delete("/:id",deleteProduct);


module.exports=router;