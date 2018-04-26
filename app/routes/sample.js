var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    let database = db.collection('notes');
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title}
        database.insert(note, (err, results) => {
            if (err) res.send({ 'error' : 'An error has occured' });
            else res.send(results.ops[0]);
        });
    });
    app.get('/notes', (req, res) => { 
        database.find({}).toArray((err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    })
    app.get('/notes/:id', (req, res) => { 
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    })
  };