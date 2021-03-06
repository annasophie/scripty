var db = require('config');
var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var lessonSchema = mongoose.Schema({
  title: String,
  description: String,
});

var Lessons = mongoose.model('Lessons', lessonSchema);

module.exports = Lessons;