const http = require('http');

const hostname = 'localhost';
const port = 8080;

const template = require('./template');

const server = http.createServer((req, res) => {
  res.end(template);
});

server.listen(port, hostname, () => {
  console.log(`server running on: ${hostname}:${port}`)
})