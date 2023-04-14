const mongoose = require('mongoose');

//  the country schema
const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});


const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
