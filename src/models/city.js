const mongoose = require('mongoose');
// city Schema
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State', // Reference to the parent document
    required: true
  }
});
  const City = new mongoose.model('City', citySchema);
module.exports = City;