const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")
const APIHandler = require("../services/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');

//DJ SESSION
/* router.get("/", isLoggedIn, (req, res, next) => {
  res.render("mix/dj-controller-main", req.session.currentUser)
}); */



//GET PLAYLISTS IN DJ SESSION PAGE
router.get("/", isLoggedIn, (req, res, next) => {
  
  const id = req.session.currentUser._id

  console.log(id)
  
  Playlist.find({owner: id}).populate('owner')
    .then(playlist => {
      console.log(playlist);
      res.render("mix/dj-controller-main", {playlist})
    })
    .catch(err => console.log(err))
});


router.get("/search", (req, res, next) => {

  const {playlist_id} = req.query
  const id = req.session.currentUser._id


  let playlistPlease = undefined

  Playlist.findById(playlist_id)
    .then(playlist => {
      playlistPlease = playlist
      const tracksPromises = playlist.track.map(track => deezerApi.getTrackById(track))
      const allPlaylists = Playlist.find()
      return tracksPromises
    })
    .then(tracksPromises => Promise.all(tracksPromises))
    .then(response => {
      Playlist.find({owner: id})
        .then(playlist => {
          res.render("mix/dj-controller-main", {playlist, playlistPlease, response})})
        })
    .catch(err => console.log(err))

})















module.exports = router;
