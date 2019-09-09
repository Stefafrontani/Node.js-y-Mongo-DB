const htttp = require('http');

const hostname = 'localhost';
const port = 3000;


const index = require('./index.js');
const indexStyles = require('./indexStyles.js');
const contact = require('./contact.js');
const contactStyles = require('./contactStyles.js');

const server = htttp.createServer((req, res) => {
    const { url } = req;
    console.log(url);
    
    switch(url){
        case '/':
        case '/index':
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(index);    
            break;
        case '/contact':
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end(contact);    
            break;
        case '/indexStyles.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(indexStyles);    
            break;
        case '/contactStyles.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(contactStyles);    
            break;
        default:
            res.writeHead(200, { 'content-type': 'text/html' })
            res.end();
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`server listening on: ${hostname}:${port}`);
});