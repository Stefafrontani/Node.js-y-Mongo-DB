const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const db = require('./modules/index');

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

const port = 3000;
let server = app.listen(port, () => {
    console.log(`Starting server on port: ${port}`);
});