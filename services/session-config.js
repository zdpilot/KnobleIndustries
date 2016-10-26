/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var mongoose = require('./mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var sessionConfig = function() {
  return session({
    secret: 'ace6e7c1-6c46-4c9b-8145-1635916e287c',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: 'session',
      ttl: 24 * 60 * 60 // 1 day
    })
  });
};

module.exports = sessionConfig;
