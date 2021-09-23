const express = require('express')
const router = express.Router()

// IMPORT PLAYER MODEL
const Player = require('../models/player')

// INDEX FOR ALL PLAYER COLLECTION -- LIST ALL PLAYERS YOU HAVE
router.get('/', (req, res) => {
  Player.find({}, (error, allPlayers) => {
    console.log(allPlayers);
    res.send(allPlayers)
  })
})
