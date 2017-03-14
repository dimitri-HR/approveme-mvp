var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// MONGODB_URI: mongodb://heroku_1kl2jhx6:pl5ufa2ofc37177skf0rsdm686@ds131480.mlab.com:31480/heroku_1kl2jhx6

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/approveme');



module.exports = {mongoose};
