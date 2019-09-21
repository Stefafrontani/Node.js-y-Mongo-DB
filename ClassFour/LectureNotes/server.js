const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
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

let data = [
  { text: 'Data 1' },
  { text: 'Data 2' },
  { text: 'Data 3' }
]

app.get("/content", (req, res) => {
    res.render("content", { items: data });
});

app.post("/content", (req, res) => {
    const newText = req.body.text;
    data.push({ text: newText })
    res.render("content", { items: data });
    
});

const port = 3000;
let server = app.listen(port, () => {
    console.log(`Starting server on port: ${port}`);
});