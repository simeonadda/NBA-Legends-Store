const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = 3000

// MODELS
const Player = require('./models/player')

// DATABASES
const MONGODB_URI = process.env.MONGODB_URI
const mongoURI = 'mongodb://localhost:27017/playercrud'

const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connection with MongoDB is established!');
})

db.on('error', (err) => {console.log(err.message + ' is MongoDB not running?')})
db.on('connected', () => {console.log('Mongo connected: ', mongoURI)})
db.on('disconnected', () => {console.log('Mongo disconnected')})

// MIDDLEWARES
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// SESSIONS MAYBE?

// CONTROLLERS
const playerController = require('./controllers/playerController')
app.use('/players', playerController)



// LISTEN
app.listen(PORT, () => {
  console.log(`NBA Legends Store App server is 🏃🏾 on PORT ${PORT}`);
})
