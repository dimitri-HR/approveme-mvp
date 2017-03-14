var mongoose = require('mongoose');

var {Item} = require('./models');
var {User} = require('./models');
// app.use(express.static(__dirname + '/public'));  // will use default index.thml in 'public' folder
// console.log('__dirname', __dirname);

function Routes(app) {

  // app.get('/', function (req, res) {
  //   res.send();
  // });

  app.get('/items', function (req, res) {
    Item.find().then(items => {
      res.send({items});
    }, (err) => {
      res.status(400).send(err);
    })
  });

  app.post('/items', function (req, res) {
    var item = new Item({
      text: req.body.text
    });

    item.save().then((doc) => {
      console.log('Item saved', doc);
      res.send(doc);
    }, (err) => {
      console.log('Item not saved', err);
      res.status(400).send(err);
    });
    console.log(req.body);
  });

  app.get('*', function (req, res) {
    res.send('Please login!');
  });
}

module.exports = Routes;
