const productModel=require('../models/product.model');

module.exports={
    getList: async function(req,res){
        const Drink= await productModel.getAll();
        res.render('homepage',{
            Drink,
            
        });
    },
    getByID:async function(req,res){
        const Drink=await productModel.getByID(req.query.id);
        const otherDrink=await productModel.getNProExcepID(req.query.id,3)
        res.render('proDetails',{
            Product:Drink[0],
            otherDrink
        })
    },
    getListCart:async function(req,res){
        const Drink= await productModel.getAll();
        res.render('cart',{
            Drink
        })
    },
    search:async function(req,res){

        const Drink= await productModel.search(req.body.info);

        res.render('homepage',{
            Drink
        });
    },
}