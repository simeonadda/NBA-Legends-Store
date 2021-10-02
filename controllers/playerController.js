const express = require('express')
const router = express.Router()

// IMPORT PLAYER MODEL
const Player = require('../models/player')
// IMPORT FAVORITES MODEL
const Faves = require('../models/faves')

// INDEX FOR ALL PLAYER COLLECTION -- LIST ALL PLAYERS YOU HAVE
router.get('/', (req, res) => {
    Player.find({}, (error, allPlayers) => {
      if (error) {
      } else {
        res.render('index.ejs', {
          players: allPlayers,
          currentUser: req.session.currentUser
        })
      }
    })
})



// BUY (NEW) ROUTE -- SELECT A RANDOM PLAYER TO ADD
router.get('/store', (req, res) => {
  console.log(req.body);
  res.render('new.ejs', {
    currentUser: req.session.currentUser
  })
  // ADD BELOW TO OBJECT ONCE SWITCHED TO res.render()
  // currentUser: req.session.currentUser
})

// SEED ROUTE -- FOR TESTING ADDING A PLAYER OR SEEDING THE DATABASE TO START
router.get('/seed', (req, res) => {
  Player.create([
    {
      first_name: 'Scottie',
      last_name: 'Pippen',
      position: 'F',
      height_feet: 6,
      height_inches: 8,
      weight_pounds: 228,
      team: {
        abbreviation: 'CHI',
        city: 'Chicago',
        conference: 'Eastern',
        division: 'Central',
        full_name: 'Chicago Bulls'
      },
      img: "https://i.pinimg.com/originals/94/c7/73/94c7731a4b5fd1582c0b14cdf69ed78e.gif"
    },
    {
      first_name: 'Patrick',
      last_name: 'Ewing',
      position: 'C',
      height_feet: 7,
      height_inches: 0,
      weight_pounds: 240,
      team: {
        abbreviation: 'NYK',
        city: 'New York',
        conference: 'Eastern',
        division: 'Atlantic',
        full_name: 'New York Knicks'
      },
      img: "https://i.pinimg.com/originals/d4/10/b1/d410b192bc75496ebd5808cada725dd0.gif"
    },
    {
      first_name: 'Clyde',
      last_name: 'Drexler',
      position: 'G',
      height_feet: 6,
      height_inches: 7,
      weight_pounds: 222,
      team: {
        abbreviation: 'POR',
        city: 'Portland',
        conference: 'West',
        division: 'Northwest',
        full_name: 'Portland Trail Blazers'
      },
      img: "https://64.media.tumblr.com/a16077f56c773987638d5104ca526602/tumblr_njesljrAci1u41fxpo1_400.gif"
    },
    {
      first_name: 'Jason',
      last_name: 'Kidd',
      position: 'G',
      height_feet: 6,
      height_inches: 4,
      weight_pounds: 209,
      team: {
        abbreviation: 'PHX',
        city: 'Phoenix',
        conference: 'West',
        division: 'Pacific',
        full_name: 'Phoenix Suns'
      },
      img: "https://64.media.tumblr.com/2bad4a1a806be2b95d9678b41cc2f692/tumblr_nkacmeEmlE1u41fxpo1_400.gif"
    },
    {
      first_name: 'Anfernee',
      last_name: 'Hardaway',
      position: 'G',
      height_feet: 6,
      height_inches: 7,
      weight_pounds: 194,
      team: {
        abbreviation: 'ORL',
        city: 'Orlando',
        conference: 'East',
        division: 'Southeast',
        full_name: 'Orlando Magic'
      },
      img: "https://i.pinimg.com/originals/03/d9/cd/03d9cd78a10b12345247db8bfe0feabb.gif"
    },
    // {
    //   first_name: 'Dikembe',
    //   last_name: 'Mutombo',
    //   position: 'G',
    //   height_feet: 7,
    //   height_inches: 2,
    //   weight_pounds: 260,
    //   team: {
    //     abbreviation: 'DEN',
    //     city: 'Denver',
    //     conference: 'West',
    //     division: 'Northwest',
    //     full_name: 'Denver Nuggets'
    //   },
    //   img: "https://64.media.tumblr.com/1f49429469c81114b240ced902e7eafe/tumblr_njgq27XnMj1u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Reggie',
    //   last_name: 'Miller',
    //   position: 'G',
    //   height_feet: 6,
    //   height_inches: 7,
    //   weight_pounds: 195,
    //   team: {
    //     abbreviation: 'IND',
    //     city: 'Indiana',
    //     conference: 'East',
    //     division: 'Central',
    //     full_name: 'Indiana Pacers'
    //   },
    //   img: "https://64.media.tumblr.com/fc5383928e731ebd00bfe8f72731b564/tumblr_nk5d053TSC1u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Karl',
    //   last_name: 'Malone',
    //   position: 'F',
    //   height_feet: 6,
    //   height_inches: 9,
    //   weight_pounds: 258,
    //   team: {
    //     abbreviation: 'UTA',
    //     city: 'Utah',
    //     conference: 'West',
    //     division: 'Northwest',
    //     full_name: 'Utah Jazz'
    //   },
    //   img: "https://64.media.tumblr.com/b2d04f12e3e4a92c9d6e90e39d90fe72/tumblr_njw10o2cO01u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Shawn',
    //   last_name: 'Kemp',
    //   position: 'F',
    //   height_feet: 6,
    //   height_inches: 10,
    //   weight_pounds: 230,
    //   team: {
    //     abbreviation: 'SEA',
    //     city: 'Seattle',
    //     conference: 'West',
    //     division: 'Northwest',
    //     full_name: 'Seattle Supersonics'
    //   },
    //   img: "https://images.squarespace-cdn.com/content/v1/507f7079e4b010bec5a03cff/1423585172655-UG21H1Q68RYMCH7H9SHR/kitron-zimri-neuschatz-shawn-kemp.gif"
    // },
    // {
    //   first_name: 'John',
    //   last_name: 'Stockton',
    //   position: 'G',
    //   height_feet: 6,
    //   height_inches: 1,
    //   weight_pounds: 170,
    //   team: {
    //     abbreviation: 'UTA',
    //     city: 'Utah',
    //     conference: 'West',
    //     division: 'Northwest',
    //     full_name: 'Utah Jazz'
    //   },
    //   img: 'https://64.media.tumblr.com/bb1189f34ca039e5e70f842bd3bd9e40/tumblr_njl12hvTib1u41fxpo1_400.gifv'
    // },
    // {
    //   first_name: 'David',
    //   last_name: 'Robinson',
    //   position: 'C',
    //   height_feet: 7,
    //   height_inches: 1,
    //   weight_pounds: 236,
    //   team: {
    //     abbreviation: 'SAS',
    //     city: 'San Antonio',
    //     conference: 'West',
    //     division: 'Southwest',
    //     full_name: 'San Antonio Spurs'
    //   },
    //   img: "https://64.media.tumblr.com/9e92688b991fa0af882411cecc9488c8/tumblr_njoqgpY87X1u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Grant',
    //   last_name: 'Hill',
    //   position: 'F',
    //   height_feet: 6,
    //   height_inches: 8,
    //   weight_pounds: 225,
    //   team: {
    //     abbreviation: 'DET',
    //     city: 'Detroit',
    //     conference: 'East',
    //     division: 'Central',
    //     full_name: 'Detroit Pistons'
    //   },
    //   img: "https://64.media.tumblr.com/82d55be2cec2a58d9198b984b16ebffd/tumblr_njmv7tUcA91u41fxpo1_400.gifv"
    // },
    // {
    //   first_name: 'Gary',
    //   last_name: 'Payton',
    //   position: 'G',
    //   height_feet: 6,
    //   height_inches: 4,
    //   weight_pounds: 190,
    //   team: {
    //     abbreviation: 'SEA',
    //     city: 'Seattle',
    //     conference: 'West',
    //     division: 'Northwest',
    //     full_name: 'Seattle Supersonics'
    //   },
    //   img: "https://64.media.tumblr.com/75576cf6afe4f59338afaa6816c4e552/tumblr_nk77tcYvWD1u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Tim',
    //   last_name: 'Hardaway',
    //   position: 'G',
    //   height_feet: 6,
    //   height_inches: 0,
    //   weight_pounds: 175,
    //   team: {
    //     abbreviation: 'MIA',
    //     city: 'Miami',
    //     conference: 'East',
    //     division: 'Southeast',
    //     full_name: 'Miami Heat'
    //   },
    //   img: "https://64.media.tumblr.com/1a53ba6d10947122e03f6dcd9163e035/tumblr_njsi17C4801u41fxpo1_400.gifv"
    // },
    // {
    //   first_name: 'Charles',
    //   last_name: 'Barkley',
    //   position: 'F',
    //   height_feet: 6,
    //   height_inches: 5,
    //   weight_pounds: 250,
    //   team: {
    //     abbreviation: 'PHX',
    //     city: 'Phoenix',
    //     conference: 'West',
    //     division: 'Pacific',
    //     full_name: 'Phoenix Suns'
    //   },
    //   img: "https://64.media.tumblr.com/42eee7f544a335de689c4e88636b9cf2/tumblr_nk1drzRYwj1u41fxpo1_400.gif"
    // },
    // {
    //   first_name: 'Hakeem',
    //   last_name: 'Olajuwon',
    //   position: 'G',
    //   height_feet: 7,
    //   height_inches: 0,
    //   weight_pounds: 256,
    //   team: {
    //     abbreviation: 'HOU',
    //     city: 'Houston',
    //     conference: 'West',
    //     division: 'Southwest',
    //     full_name: 'Houston Rockets'
    //   },
    //   img: "https://64.media.tumblr.com/53d609bbc70311ea863a7e1b53b5e718/tumblr_njcu13TYkc1u41fxpo1_400.gif"
    // },
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
    res.render('favorites.ejs', {
      players: favePlayers,
      currentUser: req.session.currentUser
    })
  })
})

// EDIT ROUTE -- TO ADD FAVORITES PAGE
router.get('/:id/faves', (req, res) => {
  Player.findById(req.params.id, (error, favePlayer) => {
    if (error) {
      console.log(error);
    } else {
      console.log(Faves);
      res.render('confirm_fave.ejs', {
        players: favePlayer,
        currentUser: req.session.currentUser
      })
    }
  })
})

router.put('/:id', (req, res) => {
  req.body.favorite = req.body.favorite === 'on'
  Player.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, updatedPlayer) => {
      if (error) {
        console.log(error);
        res.send(error)
      } else {
        res.redirect('/players')
      }
    }
  )
})

// SHOW ROUTE -- FOR DISPLAYING AN INDIVIDUAL PLAYER
router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (error, foundPlayer) => {
    res.render('show.ejs', {
      players: foundPlayer,
      currentUser: req.session.currentUser
    })
  })
})

// POST ROUTE -- TO DISPLAY YOUR FAVORITES
router.post('/faves', (req, res) => {
  if (req.body.favorite === "on") {
    req.body.favorite = true
    Player.create(req.body, (error, favePlayer) => {
      if (error) {
        console.log(error);
        res.send(error)
      } else {
        console.log(favePlayer);
        res.redirect('/players')
      }
    })
  } else {
    req.body.favorite = false
    console.log(req.body)
  }
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
