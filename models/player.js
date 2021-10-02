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
  img: String,
  favorite: {type: Boolean, default: false}
})

const Player = model('Player', playerSchema)

module.exports = Player

//===============================
//  UPLOADING JSON DATA EXAMPLE
//===============================
// const data = { username: 'example' };
//
// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
