const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const hbs = require('express-handlebars');

const {PORT} = require('./config');
const router = require('./routes/blog');
const logErrors = require('./middleware/logErrors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('common'));
app.use('/blog', router);
app.use(logErrors);

app.engine('hbs', hbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
    res.render('main.hbs');
});

let server;

function runServer() {
    return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => {
            console.log(`server listening on port: ${PORT}`);
            resolve(server);
        }).on('error', err => {
            reject(err);
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        console.log('closing server');
        server.close(err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer().catch(err => {console.error(err)});
}

module.exports = {app, runServer, closeServer};