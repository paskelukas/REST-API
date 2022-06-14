const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create crypto schema & model
const CryptoSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  marketcap: {
    type: Number
  }
});

//create crypto model object
const Crypto = mongoose.model('crypto', CryptoSchema);

//export to other files
module.exports = Crypto;
