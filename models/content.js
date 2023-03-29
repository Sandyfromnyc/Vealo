const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  user: {
    type:Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});


const contentSchema = new Schema({
  title: {
   type: String,
   required: true
  },
  type: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required:true
  },
  poster: {
    type: String,
    required: true
  },
  genre_names: [{
    type: String,
    required: true
  }],
  user_rating: {
    type: Number,
    required: true
  },
  us_rating: {
    type: String,
  },
  plot_overview: {
    type: String
  },


  reviews: [reviewSchema]

});


module.exports = mongoose.model('Content', contentSchema);