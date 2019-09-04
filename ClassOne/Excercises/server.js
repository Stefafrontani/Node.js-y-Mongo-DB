const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  const { url } = req;

  res.end(template);
});

server.listen(port, hostname, () => {
  console.log(`server running on: ${hostname}:${port}`)
})