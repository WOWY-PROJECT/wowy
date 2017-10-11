const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const articleSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId, ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  // street: {
  //   type: String
  // },
  // city: {
  //   type: String
  // },
  // country: {
  //   type: String
  // },
  // localization: {
  //   type: String,
  //   default: []
  // },
  date: {
    type: Date
  },
  reward: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['found', 'lost']
  }
  // uploader: {  //No funciona al subir el seeds
  //   type:Schema.Types.ObjectId,
  //   ref:'User'
  // },
  // timestamps:{
  //   createdAt: "created_at",
  //   updateAt: "updated_at"
  // }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
