/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var express = require('express');
var router = express.Router();

var context = {
  title: 'Administration',
  name: 'Knoble'
};

router.get('/', function(req, res, next) {
  if (req.session.login) {
    context.user = req.session.user;
    res.render('admin', context);
  }
  else {
    res.redirect('/admin/login');
  }
});

router.get('/login', function (req, res, next) {
  context.loginError = false;
  context.csrf = req.csrfToken();
  res.render('login', context);
});

router.post('/login', function (req, res, next) {
  if (req.body.username == 'admin' && req.body.password == 'gztdJu5wHivM') {
    req.session.login = true;
    req.session.user = {
      id: 'admin',
      name: 'Administrator',
      image: 'images/9dev2sc.png'
    };
    context.user = req.session.user;
    context.loginError = false;
    res.redirect('/admin');
  }
  else {
    context.loginError = true;
    res.render('login', context);
  }
});

router.get('/logout', function (req, res, next) {
  req.session.login = false;
  req.session.destroy();
  res.redirect('/admin/login');
});

module.exports = router;