const express = require('express')
const router = express.Router()

// IMPORT PLAYER MODEL
const Player = require('../models/player')
// IMPORT FAVORITES MODEL
const Faves = require('../models/faves')

// INDEX FOR ALL PLAYER COLLECTION -- LIST ALL PLAYERS YOU HAVE
router.get('/', (req, res) => {
  Player.find({}, (error, allPlayers) => {
    console.log(allPlayers);
    res.render('index.ejs', {players: allPlayers})
  })
})



// NEW ROUTE -- SELECT A RANDOM PLAYER TO ADD
router.get('/buy', (req, res) => {
  console.log(req.body);
  res.send(req.body)
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
    },
    {
      first_name: 'Kobe',
      last_name: 'Bryant',
      position: 'G',
      height_feet: 6,
      height_inches: 6,
      weight_pounds: 212,
      team: {
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'Western',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers'
      }
    },
    {
      first_name: 'Lebron',
      last_name: 'James',
      position: 'F',
      height_feet: 6,
      height_inches: 9,
      weight_pounds: 250,
      team: {
        abbreviation: 'LAL',
        city: 'Los Angeles',
        conference: 'Western',
        division: 'Pacific',
        full_name: 'Los Angeles Lakers'
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

// FAVORITES ROUTE -- FOR DISPLAYING YOUR TOP OR FAVORITE CARDS
router.get('/faves', (req, res) => {
  // Need to display cards from a favorite players array
  Faves.find({}, (error, favePlayers) => {
    res.render('favorites.ejs', {players: favePlayers})
  })
})

// POST ROUTE -- TO ADD FAVORITES PAGE
router.post('/faves', (req, res) => {
  let favePlayer = Object.assign({}, req.params.id)
  console.log(favePlayer);
  Faves.create(req.body, (error, favePlayer) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/faves')
    }
    console.log(favePlayer);
  })
})

// SHOW ROUTE -- FOR DISPLAYING AN INDIVIDUAL PLAYER
router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (error, foundPlayer) => {
    console.log(foundPlayer);
    res.render('show.ejs', {players: foundPlayer})
  })
})

// DELETE ROUTE -- FOR DELETING CARDS DURING TESTING
router.delete('/:id', (req, res) => {
  Player.findByIdAndDelete(req.params.id, (error, deletedPlayer) => {
    if (error) {
      console.log(error);
      res.send(error)
    } else {
      res.redirect('/players')
    }
  })
})

module.exports = router
