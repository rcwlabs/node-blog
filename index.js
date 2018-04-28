const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const {PORT} = require('./config');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.send('The app is working!');
});

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
});