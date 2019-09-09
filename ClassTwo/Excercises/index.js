const express  = require('express');

const app = express();

app.get("/", (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    res.send('Server is running!');
});

app.listen(port = 3000, () => {
    console.log(`Server running on port: ${port}`)
})