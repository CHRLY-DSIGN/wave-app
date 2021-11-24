const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")
const APIHandler = require("../services/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');


//NEW PLAYLIST

router.get("/new", (req,res,next) => {
    res.render("playlist/new-playlist")

})

router.post("/new", (req, res, next) => {
    const {name} = req.body

    Playlist.create({name, track: [], owner: req.session.currentUser._id})
        .then(playlist => res.redirect("/profile"))
        .catch(err => console.log(err))
})




// ADD TO PLAYLIST

router.get("/:id/add-to-playlist", isLoggedIn, (req, res, next) => {

    const { id } = req.params
    const userId = req.session.currentUser._id

    const song = deezerApi.getTrackById(id)

    const playlist = Playlist.find({owner: userId}).populate('owner')
  
    Promise.all([song, playlist])
      .then(data => {
          const[song, playlist] = data
          res.render("playlist/add-to-playlist", {song, playlist})
      })
      .catch(err => console.log(err))
  });




router.post("/:id/add-to-playlist", (req, res, next) => {
    
    const {playlist} = req.body
    const {id} = req.params
    console.log(id);
    

    Playlist.findByIdAndUpdate(playlist, { $push: { track: id }}, { new: true } )
        .then(res.redirect("/discover/music"))
        .catch(err => console.log(err))
})




module.exports = router;