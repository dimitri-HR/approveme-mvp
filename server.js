var express = require('express');
var routes = require('./server/routes');

var PORT = process.env.PORT || 3000;

app = express();
// app.use(morgan('short'));
// app.use(morgan('tiny'));

app.use(express.static(__dirname + '/public'));
routes(app);


app.listen(PORT, function() {
  console.log('APPROVEME - Express server started on port ' + PORT);
});
