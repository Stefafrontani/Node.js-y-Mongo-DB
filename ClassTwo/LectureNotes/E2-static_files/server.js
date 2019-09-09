const htttp = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = htttp.createServer((req, res) => {
    const { url } = req;
    console.log('URL', url);
    
    switch(url){
        case '/':
        case '/index':
        case '/index.html':
            fs.readFile('index.html', 'utf-8', (error, fileData) => {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(fileData);
            })
            break;
        
        case '/index.css':
            fs.readFile('index.css', 'utf-8', (error, fileData) => {
                res.writeHead(200, { 'content-type': 'text/css' })
                res.end(fileData);
            })
            break;
        case '/contact':
        case '/contact.html':
                fs.readFile('index.html', 'utf-8', (error, fileData) => {
                    res.writeHead(200, { 'content-type': 'text/html' })
                    res.end(fileData);
                })
                break;
            
        case '/contact.css':
            fs.readFile('index.css', 'utf-8', (error, fileData) => {
                res.writeHead(200, { 'content-type': 'text/css' })
                res.end(fileData);
            })
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