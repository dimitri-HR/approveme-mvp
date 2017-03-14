var bodyParser = require('body-parser');
var express = require('express');

var mongoose = require('./db/mongoose');
var models = require('./models');
var routes = require('./routes');

var PORT = process.env.PORT || 3000;

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(morgan('short'));
// app.use(morgan('tiny'));

app.use(express.static(__dirname + '/public'));
routes(app);



app.listen(PORT, function() {
  console.log('APPROVEME - Express server started on port ' + PORT);
});
