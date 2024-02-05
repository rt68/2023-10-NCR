const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Logs Schema
const logsSchema = new Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: { type: Boolean, default: true }
}, {
  timestamps: true // Super bonus: Adds createdAt and updatedAt timestamps to documents
});

// Compile and export the model
const Log = mongoose.model('Log', logsSchema);
module.exports = Log;
