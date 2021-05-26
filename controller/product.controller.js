const productModel=require('../models/product.model');

module.exports={
    getList: async function(req,res){
        const Drink= await productModel.getAll();
        console.log(Drink.length);
        res.render('homepage',{
            Drink
        });
    },
    getByID:async function(req,res){
        const Drink= await productModel.getByID(req.query.id);
        const otherDrink=await productModel.getNProExcepID(req.query.id,3)
        console.log(Drink);
        res.render('proDetails',{
            Product:Drink[0],
            otherDrink
        })
    },
    getListCart:async function(req,res){
        const Drink= await productModel.getAll();
        console.log("in");
        res.render('cart',{
            Drink
        })
    },
    search:async function(req,res){
        console.log(req.body.info);

        const Drink= await productModel.search(req.body.info);
        console.log("------");

        console.log(Drink);
        res.render('homepage',{
            Drink
        });
    },
}