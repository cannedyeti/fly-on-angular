var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  engines: String,
  img: String
});

module.exports = mongoose.model('Airplane', AirplaneSchema);
