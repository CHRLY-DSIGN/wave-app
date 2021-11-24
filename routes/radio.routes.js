const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")
const APIHandler = require("../public/js/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');


//RADIO
router.get("/", (req, res, next) => {
 res.render("radio/radio-main")  
});



router.post("/", (req, res, next) => {
  const {track} = req.body

  deezerApi.searchByTrack(track)
    /* .then(searchedTrack => console.log(searchedTrack.data.data)) */
    .then(searchedTrack => res.render("radio/radio-main", {searchedTrack}))
    .catch(err => console.log(err))
})


router.get("/:id", (req, res, next) => {
  
   const {id} = req.params

   deezerApi.getAlbum(id)
    /* .then(album => console.log(album.data.genre_id)) */
    .then(album => deezerApi.radioTracks(album.data.genre_id))
    .then(songs => {
      /* console.log(songs.data.data) */
      res.render('radio/radio-playlist', {songs: songs.data.data})})
    .catch(err => console.log(err))
})




module.exports = router;
