const MongoClient    = require('mongodb').MongoClient;
const db             = require('../../config/db');
const appRoutes      = require('./appRoutes');
const menuRoutes     = require('./menuRoutes');
const userRoutes     = require('./userRoutes');

module.exports = function(app) {
    MongoClient.connect(db.urlKitchenSink, (err, db) => { 
        appRoutes(app, db);
        menuRoutes(app, db);
        userRoutes(app, db);
    });
};