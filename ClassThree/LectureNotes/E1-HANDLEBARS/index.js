const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const motorhandlebars = exphbs.create({
    extname: "hbs",
});

app.engine("hbs", motorhandlebars.engine);
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(3000,() => {
    console.log("Servidor listo");
});