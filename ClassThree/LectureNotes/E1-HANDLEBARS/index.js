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

app.route("/count")
    .get((req,res) => {
        res.render("count");
    })
    .post((req,res) => {
        let valueA = Number(req.body.valorA);
        let valueB = Number(req.body.valorB);
        let sumresult = valueA + valueB;
        let data = {
            valueA: valueA,
            valueB: valueB,
            result: sumresult,
        };
        res.render("countResult", data);
    })

app.get("/people", (req, res) => {
  let names = [
      "Bruno",
      "Stefano",
      "Giacomo"
  ]

  res.render("people", {
      names: names
  })
})

app.get("/peopleTwo", (req, res) => {
  let names = [
      { name: "Bruno", surname: "Frontani" },
      { name: "Stefano", surname: "Frontani" },
      { name: "Giacomof", surname: "Frontani" },
  ]

  res.render("peopleTwo", {
      names: names
  })
})

app.listen(3000,() => {
    console.log("Servidor listo");
});