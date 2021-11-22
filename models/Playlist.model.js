const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({
  
  track: String
})

module.exports = mongoose.model('Playlist', playlistSchema)