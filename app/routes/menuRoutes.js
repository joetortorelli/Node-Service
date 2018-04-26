var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    let database = db.collection('mainMenu');
    app.post('/menu', (req, res) => {
        // const acct = { 
        //     username: req.body.username, 
        //     firstname: req.body.firstname, 
        //     lastname: req.body.lastname, 
        //     email: req.body.email
        // }
        // database.insert(acct, (err, results) => {
        //     if (err) res.send({ 'error' : 'An error has occured' });
        //     else res.send(results.ops[0]);
        // });
    });
    app.get('/menu', (req, res) => { 
        database.find({}).toArray((err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    })
};