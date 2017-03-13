

// app.use(express.static(__dirname + '/public'));  // will use default index.thml in 'public' folder
// console.log('__dirname', __dirname);

function Routes(app) {
  app.get('/createUser', function (req, res) {
    res.send('Welcome Dima');
  });
  app.get('/', function (req, res) {
    res.send('Welcome Dima');
  });
  app.get('*', function (req, res) {
    res.send('Please login');
  });
}

module.exports = Routes;
