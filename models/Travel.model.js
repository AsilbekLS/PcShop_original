const { Schema, model } = require('mongoose')

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  image: {
    type: String,
    required: true
  },
  descount: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

module.exports = model('Travel', travelModel)