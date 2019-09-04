const http = require('http');
const sayHi = require('./sayHi');

let server = http.createServer((req, res) => {
    console.log('server running');
    console.log(req.url); // Da 2 request, una a la web '/' y otra al favicon favico.xxx
    
    res.writeHead(200, { "content-type": "text/html" }); // si ves en network esta el content type como header
    res.end(sayHi);
})

server.listen(3000);