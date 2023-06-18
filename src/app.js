const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 20000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, rep) => rep.render('home'));
app.listen(port);