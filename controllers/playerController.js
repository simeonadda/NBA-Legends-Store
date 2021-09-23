const express = require('express')
const router = express.Router()

// IMPORT PLAYER MODEL

// INDEX FOR ALL PLAYER COLLECTION -- LIST ALL PLAYERS YOU HAVE
router.get('/', (req, res) => {
  Player.find({}, (error, allPlayers) => {
    console.log(allPlayers);
  })
})
