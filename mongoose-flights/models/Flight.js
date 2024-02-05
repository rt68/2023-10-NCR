const { Schema, model } = require('mongoose');

// Define destinationSchema
const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  },
  arrival: Date,
});

// Update flightSchema
const flightSchema = new Schema({
  airline: {
    type: String, 
    enum: ['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    required: [true, 'Flight number is required'],
    min: [10, 'Flight number must be between 10 and 9999'],
    max: [9999, 'Flight number must be between 10 and 9999']
  },
  departs: {
    type: Date,
    default: function() {
      let oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      return oneYearFromNow;
    }
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  destinations: [destinationSchema]
});
const Flight = model('Flight', flightSchema);

module.exports = Flight;