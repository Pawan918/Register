const mongoose = require('mongoose');
// State Schema
const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country', // Reference to the parent document
    required: true
  }
});
  
  const State = mongoose.model('State', stateSchema);
  module.exports = State;
