const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const port           = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
require('./app/routes')(app);
app.listen(port, () => { 
    console.log('We are live on ' + port);
})