const express = require('express');
const app = express();

app.use(express.static("contenido"));

app.get("/calcular", (req, res) => {
    const valorA = Number(req.query.valorA);
    const valorB = Number(req.query.valorB);
    const resultado = valorA + valorB;
    let html = `
        <html>
            <body>
                Result is ${resultado}
            </body> 
        </html>`
    res.send(html);
})

app.get("/json", (req, res) => {
    const json = { data: 'Json response' };
    res.json(json);
})

app.listen(3000, () => {
    console.log('Server ready')
})