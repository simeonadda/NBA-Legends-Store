const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = 3000

// MODELS

// CONTROLLERS

app.listen(PORT, () => {
  console.log(`NBA Legends Store App server is 🏃🏾 on PORT ${PORT}`);
})
