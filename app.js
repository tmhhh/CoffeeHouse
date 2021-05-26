const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 2000 || process.env.PORT;

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

app.use("/", require('./routes/main.route'));

app.use(function (req, res) {
    res.send("error");
});
app.listen(PORT, function () {
    console.log(`Sever is running at http://localhost:${PORT}`);
});
