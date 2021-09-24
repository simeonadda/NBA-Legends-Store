const express = require('express')
const router = express.Router()

// IMPORT PLAYER MODEL
const Player = require('../models/player')

// INDEX FOR ALL PLAYER COLLECTION -- LIST ALL PLAYERS YOU HAVE
router.get('/', (req, res) => {
  Player.find({}, (error, allPlayers) => {
    console.log(allPlayers);
    res.send('This is where all my ⛹🏾‍♂️ players would be!')
  })
})

// NEW ROUTE -- SELECT A RANDOM PLAYER TO ADD
router.get('/new', (req, res) => {
  res.send('NEW PAGE -- Select a ⛹🏾‍♂️ to add!')
})

// SEED ROUTE -- FOR TESTING ADDING A PLAYER OR SEEDING THE DATABASE TO START
router.get('/seed', (req, res) => {
  Player.create([
    {
      first_name: 'Michael',
      last_name: 'Jordan',
      position: 'G',
      height_feet: 6,
      height_inches: 6,
      weight_pounds: 216,
      team: {
        abbreviation: 'CHI',
        city: 'Chicago',
        conference: 'Eastern',
        division: 'Central',
        full_name: 'Chicago Bulls'
      }
    }
  ], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/players')
    }
  })
})

module.exports = router
