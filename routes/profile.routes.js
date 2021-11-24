const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")
const APIHandler = require("../services/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');

//HOME

router.get("/", isLoggedIn, (req, res, next) => {

  const id = req.session.currentUser._id

  Playlist.find({owner: id}).populate('owner')
    .then(playlist => {
      console.log(playlist);
      res.render("profile/user-profile-main", {playlist})
    })
    .catch(err => console.log(err))
});



//VISIT OTHER PROFILES
router.get("/:id", (req, res, next) => {
  
  const {id} = req.params
  const user = User.findById(id)
  const playlist = Playlist.find({owner: id}).populate('owner')
  
  //TODO create a middleware / util to show only this user's playlists


  Promise.all([user, playlist])
    .then(data => {
      const [user, playlist] = data
      res.render("profile/user-profile-visit", {user, playlist})
    })
    .catch(err => console.log(err))
});


//SHOW CURRENT USER PLAYLISTS IN PROFILE PAGE

router.get("/:id", (req, res, next) => {
  
  const id = req.session.currentUser._id

  console.log(id)
  
  Playlist.find({owner: id}).populate('owner')
    .then(playlist => {
      console.log(playlist);
      res.render("profile/user-profile-main", {playlist})
    })
    .catch(err => console.log(err))
});



//CHECK PROFILE PLAYLISTS

router.get("/check-playlist/:id", (req, res, next) => {

  const {id} = req.params
  let playlistPlease = undefined

  Playlist.findById(id)
    .then(playlist => {
      playlistPlease = playlist
      // res.render("playlist/show-playlist-tracks", playlist)
      const tracksPromises = playlist.track.map(track => deezerApi.getTrackById(track))
      
      return tracksPromises
    })
    .then(tracksPromises => Promise.all(tracksPromises))
    .then(response => {
      console.log(response[0].data);
      res.render("playlist/show-playlist-tracks", {playlistPlease, response})})
    .catch(err => console.log(err))

})












module.exports = router;
