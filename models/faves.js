const mongoose = require('mongoose')
const {Schema, model} = mongoose

const playerSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  position: String,
  height_feet: Number,
  height_inches: Number,
  weight_pounds: Number,
  team: {
    abbreviation: {type: String, required: true},
    city: {type: String, required: true},
    conference: {type: String, required: true},
    division: {type: String, required: true},
    full_name: {type: String, required: true}
  },
  img: String
})

const Faves = model('Faves', playerSchema)

module.exports = Faves
