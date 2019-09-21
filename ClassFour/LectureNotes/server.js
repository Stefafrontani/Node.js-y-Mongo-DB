const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const content = require('./modules/content');
const aboutRouter = require('./routers/about.js');

app.use(express.static("content"));

// Configure post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure express to use handlebars
// First: create handlebars engine
const motor = exphbs.create(
    {
        defaultLayout: 'main',
        extname: 'hbs'
    });

// Configure express to use handlebars engine
app.engine('hbs', motor.engine);
// Tell express view's engines to use hbs files
app.set("view engine", "hbs");

// Define the same response for several routes
app.get(['/', '/index'], (req, res) => {
    res.render("index");
})

app.use('/about', aboutRouter);

app.get("/content", (req, res) => {
  content.getAll((err, data) => {
    res.render("content", { items: data });
  })
});

app.post("/content", (req, res) => {
  const newText = req.body.text;
  content.insert({ text: newText }, () => {
    content.getAll((err, data) => {
      res.render("content", { items: data });
    })
  });
});

const port = 3000;
let server = app.listen(port, () => {
    console.log(`Starting server on port: ${port}`);
});