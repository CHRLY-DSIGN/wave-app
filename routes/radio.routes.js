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
    /* .then(searchedTrack => console.log(searchedTrack)) */
    .then(searchedTrack => res.render("radio/radio-main", {tracks: searchedTrack?.data.data}))
    .catch(err => console.log(err))
})


router.get("/new-mix", (req, res, next) => {
  deezerApi.radioFunction()
    .then()
    .catch()
})

module.exports = router;
