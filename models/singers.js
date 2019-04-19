const mongoose = require('mongoose')

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  gender: String,
  genre: String,
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Song'
  }]
})

const Singer = mongoose.model('Singer', singerSchema)
module.exports = Singer