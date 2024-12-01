// schema/schema.js

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate emails
  },
  password: {
    type: String,
    required: true,
  }
});

// Create a model from the schema
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
