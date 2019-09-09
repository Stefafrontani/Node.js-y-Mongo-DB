const express  = require('express');
const index    = require('./static/templates/index.js');
const profile  = require('./static/templates/profile.js');
const users    = require('./static/templates/users.js');
const messages = require('./static/templates/messages.js');

const apiRouter = require('./router.js');

const app = express();

app.use('/api', apiRouter);

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.send(index('HOME'));
});

app.get("/home", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.send(index('HOME'));
});

app.get("/profile", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.end(profile);
});

app.get("/messages", (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200);
  res.end(messages);
});

app.get("/users", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.send(users);
});

app.listen(port = 3000, () => {
    console.log(`Server running on port: ${port}`)
})