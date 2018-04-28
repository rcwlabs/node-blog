const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const hbs = require('express-handlebars');

const {PORT} = require('./config');
const router = require('./routes/blog');

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('common'));
app.use('/blog', router);

app.engine('hbs', hbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    res.render('main.hbs');
});

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});
