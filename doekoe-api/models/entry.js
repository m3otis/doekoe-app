const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for entry
let entry = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  amount: {
    type: Number
  }
},{
    collection: 'entry'
});

module.exports = mongoose.model('entry', entry);