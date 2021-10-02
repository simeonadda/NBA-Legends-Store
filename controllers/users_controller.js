const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res) => {
  res.render('signup.ejs')
})

users.post('/', (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  req.body.confirmPassword = req.body.password
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.log(error);
    } else {
      console.log('user is created', createdUser)
      res.redirect('/login')
    }
  })
})

module.exports = users
