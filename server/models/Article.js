const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Article name is required']
  },
  description: {
    type: String,
    required: [true, 'Article description is required']
  },
  image: {
    type: String,
    default: ''
  },
  localization: {
    type: String,
    default: []
  },
  date: {
    type: Date
  },
  reward: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: true
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
