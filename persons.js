const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// }, {strict: false});

module.exports = mongoose.model('persons', personSchema);
