const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model');

module.exports = {
    add: async function (req, res) {
        console.log('-------------------');
        var Cart = [];
        const Product = await productModel.getByID(req.query.id);


        if (req.session.Cart) {
            req.session.Cart.forEach(e => {
                if (e.proID === Product[0].proID) {
                    e.Quantity++;
                    Cart.push(e);
                    console.log('vo if  ');

                }
                else {
                    console.log(' eles 1');
                    Cart.push(e);
                }


            });
        }
        else {
            console.log(' eles 2');

            Product[0].Quantity = 1;
            Cart.push(Product[0]);

        }
        var tmp = Cart.find(function (e) {
            return Product[0].proID == e.proID;
        });
        if (!tmp) {
            Product[0].Quantity = 1;
            Cart.push(Product[0]);
        }
        var totalPrice = 0;

        req.session.Cart = Cart;

        req.session.Cart.forEach(e => {
            totalPrice += e.proPrice * e.Quantity;
        });

        req.session.totalPrice = totalPrice;
        res.redirect('/cart');
    },
    order: async function (req, res) {
        var date = new Date();
        const Bill = {
            date: date,
            totalPrice: +req.session.totalPrice,
            userName: req.body.userName,
            userAddress: req.body.userAddress,
            userPhone: req.body.userPhone,
            note: req.body.note
        }
        console.log("1");
        await cartModel.addBill(Bill);

        const result = await cartModel.getLastestBillID();

        req.session.Cart.forEach(async e => {
            const billInfo = {
                billID: result.billID,
                proID: e.proID,
                Quantity: +e.Quantity
            }

            await cartModel.addBillInfo(billInfo);

        });
        req.session.Cart = null;
        req.session.totalPrice = null;
        res.redirect('/cart');

    },
    remove: function (req, res) {
        console.log(req.query.id);
        req.session.Cart.forEach(e => {
            if (e.proID == req.query.id) {
                if (e.Quantity > 1) {
                    e.Quantity--;
                }
                else {
                    req.session.Cart.pop(e);
                }
            }
        });
        res.redirect('/cart');
    }

}