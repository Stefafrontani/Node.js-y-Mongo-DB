const http = require('http');

const hostname = 'localhost';
const port = 8080;

const home     = require('./home');
const users    = require('./users');
const profile  = require('./profile');
const messages = require('./messages');

const apiUsers = require('./api/users.json');
const apiComments = require('./api/comments.json');
const apiMessages = require('./api/messages.json');
const apiPosts = require('./api/posts.json');

const server = http.createServer((req, res) => {
  
  const { url } = req;
  switch(url) {
    case '/':
      res.setHeader("Content-Type", "text/html");
      res.write(home);
      break;
    case '/profile':
      res.setHeader("Content-Type", "text/html");
      res.write(profile);
      break;
    case '/users':
      res.setHeader("Content-Type", "text/html");
      res.write(users);
      break;
    case '/messages':
      res.setHeader("Content-Type", "text/html");
      res.write(messages);
      break;
    case '/api/users':
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(apiUsers, null, 2));
      break;
    case '/api/posts':
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(apiPosts, null, 2));
      break;
    default:
      break;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`server running on: ${hostname}:${port}`)
})