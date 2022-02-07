const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'the name is required'],
    unique: true,
  },
  rating: {
    type: String,
    default: 4.5,
    min: 1,
    max: 5,
  },
  price: {
    type: Number,
    required: [true, 'the price is required'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
