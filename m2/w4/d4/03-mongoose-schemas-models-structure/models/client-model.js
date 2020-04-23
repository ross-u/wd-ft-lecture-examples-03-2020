const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = require('../schemas/payment-schema');

// CREATE THE SCHEMA - Blueprint and the instruction for the model
const clientSchema = new Schema({
  name: {  type: String, required: true},
  age: { type: Number, required: true, min: 1, max: 65 },
  accountActive: { type: Boolean, default: true },
  balance: {type: Number, required: true},
  payments: [paymentSchema]
})


// CREATE THE MODEL
const Client = mongoose.model('Client', clientSchema);

// EXPORT
module.exports = Client;