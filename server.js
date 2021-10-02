const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt')
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// MODELS
const Player = require('./models/player')

// DATABASES
const MONGODB_URI = process.env.MONGODB_URI
const mongoURI = 'mongodb://localhost:27017/playercrud'

const db = mongoose.connection


mongoose.connect(MONGODB_URI, {
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
app.use(express.json())

// SESSIONS MAYBE?
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// HOME PAGE -- TO LOGIN OR SIGN UP
app.get('/', (req, res) => {
  res.render('home.ejs', {
    currentUser: req.session.currentUser
  })
})

// LOGIN PAGE
app.get('/login', (req, res) => {
  res.render('login.ejs', {
    currentUser: req.session.currentUser
  })
})

// app.post('/', (req, res) => {
//   let username = req.body.username;
//   let password = req.body.password;
//   res.redirect('/sessions/new')
// })


// CONTROLLERS
const playerController = require('./controllers/playerController')
app.use('/players', playerController)

const userController = require('./controllers/users_controller.js')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)


// LISTEN
app.listen(PORT, () => {
  console.log(`NBA Legends Store App server is 🏃🏾 on PORT ${PORT}`);
})
