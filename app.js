const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 2000;
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));
app.engine(
    "hbs",
    exphbs({
        defaultLayout: "main.hbs",
        extname: ".hbs",

    })
);
app.set("view engine", "hbs");

//configure to static files
app.use("/", express.static("views/public"));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(function (req, res, next) {
    if (req.session.Cart) {
        res.locals.Cart = req.session.Cart;
        res.locals.TotalPrice = req.session.totalPrice;
    }
    next();
})
app.use("/", require('./routes/main.route'));

app.use(function (req, res) {
    res.send("error");
});
app.listen(PORT, function () {
    console.log(`Sever is running at http://localhost:${PORT}`);
});
