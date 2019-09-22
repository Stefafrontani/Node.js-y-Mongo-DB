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

const showLoginForm = true;
app.get(['/', '/index'], (req, res) => {
  res.render('index', { showLoginForm: showLoginForm});
})

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  db.users.loginUser({ username, password });
  res.render('index');
})

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  db.users.createUser({ username, password });
  res.render('index');
})

app.get('/users', (req, res) => {
  db.users.getUsers((users) => {
    res.render('users', { users });
  });
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.users.findUserByID(userId, (error, user) => {
    res.render('userData', { user: user });
  });
})

const port = 3000;
let server = app.listen(port, () => {
    console.log(`Starting server on port: ${port}`);
});