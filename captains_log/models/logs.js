const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Comment Schema as a subdocument
const commentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  username: String
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps to each comment
});

// Define the Logs Schema
const logsSchema = new Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: { type: Boolean, default: true },
  comments: [commentSchema] //Embedding the comment schema
}, {
  timestamps: true // Super bonus: Adds createdAt and updatedAt timestamps to documents
});

// Compile and export the model
const Log = mongoose.model('Log', logsSchema);
module.exports = Log;
