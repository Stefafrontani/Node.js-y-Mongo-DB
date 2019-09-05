const http = require('http');

const hostname = 'localhost';
const port = 8080;

const home     = require('./home');
const users    = require('./users');
const profile  = require('./profile');
const messages = require('./messages');

const apiUsers = require('./api/users.json');

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  const { url } = req;
  switch(url) {
    case '/':
      res.write(home);
      break;
    case '/profile':
      res.write(profile);
      break;
    case '/users':
      res.write(users);
      break;
    case '/messages':
      res.write(messages);
      break;
    default:
      break;
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`server running on: ${hostname}:${port}`)
})