const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const motorhandlebars = exphbs({
  extname: 'hbs', // extension of files searched
  defaultLayout: 'defaultLayout', // defaultLayout when no specify in res.render('view', { layout: 'zzz' })
});

app.set('view engine', 'hbs');
app.engine("hbs", motorhandlebars);

app.use(express.static('content'));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})