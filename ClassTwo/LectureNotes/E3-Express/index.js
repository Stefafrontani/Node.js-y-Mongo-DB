const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/contenido/index.html")
})

app.listen(3000, () => {
    console.log('Servidor listo')
})