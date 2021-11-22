const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mixerSchema = new Schema({
  
  trackDiskR: String,
  trackDiskL: String,
  track1: String,
  track2: String,
  track3: String,
  track4: String,
  track5: String,
  track6: String,
})

module.exports = mongoose.model('Mixer', mixerSchema)