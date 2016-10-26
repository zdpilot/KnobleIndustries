/**
 * Created by yeoman generator-makrina 0.3.0 on 17/10/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:locale(el|en)?', function(req, res, next) {
  if (req.params.locale) req.setLocale(req.params.locale);
  res.render('index', {
    title: 'Knoble',
    lang: req.getLocale(),
    description: 'Knoble Industries'
  });
});

// The following works as well
//router.get('/:locale(el|en)?/about', function(req, res, next) {

module.exports = router;
