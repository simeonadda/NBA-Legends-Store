const mongoose = require('mongoose')
const {Schema, model} = mongoose

const playerSchema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  position: {type: String, required: true},
  height_feet: Number,
  height_inches: Number,
  weight_pounds: Number,
  team: {
    abbreviation: {type: String, required: true},
    city: {type: String, required: true},
    conference: {type: String, required: true},
    division: {type: String, required: true},
    full_name: {type: String, required: true}
  }
})

const Faves = model('favePlayer', playerSchema)

module.exports = Faves
