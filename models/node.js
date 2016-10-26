/**
 * Created by yeoman generator-makrina:model 0.3.0 on 17/10/2016.
 */
var mongoose = require('mongoose');
var types = mongoose.Schema.Types;

var nodeSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Node', nodeSchema);
