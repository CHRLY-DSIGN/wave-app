const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({
  name: String,
  track: [String],
  creator: { 
      type: Schema.Types.ObjectId,
      ref: "User"
  }
})

module.exports = mongoose.model('Playlist', playlistSchema)