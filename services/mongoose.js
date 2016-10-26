/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('../models/node');

mongoose.connect('mongodb://127.0.0.1/Knoble', function(err) {
  if (err) console.log('connection error', err);
  else console.log('connection successful');
});

module.exports = mongoose;
