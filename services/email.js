/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var Promise = require('bluebird');
var nodemailer = require('nodemailer');

var transporter = Promise.promisifyAll(
  nodemailer.createTransport({
    host: '',
    auth: {
      user: '',
      pass: ''
    },
    secure: true
    // tls: {rejectUnauthorized: false}
  })
);

module.exports = transporter;
