const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const APIHandler = require("../public/js/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');




//DISCOVER
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("discover/discover-main", req.session.currentUser)
});


router.get("/music", (req, res, next) => {
  res.render("discover/discover-music")
})


router.get("/users", (req, res, next) => {
  User.find()
    .then(allUsers => res.render("discover/discover-users", { allUsers }))
    .catch(err => console.log(err))  
})



//SEARCH BY ARTIST
router.post("/music", (req, res, next) => {
  const {artist, track} = req.body

  console.log('req.body', req.body);
  const searchArtist = deezerApi.searchByArtist(artist)
  const searchTrack = deezerApi.searchByTrack(track)
  // .then(searchedArtist => console.log(searchedArtist.data.data[0] ))
    // .then(searchedArtist => res.render("discover/discover-music", {artists: searchedArtist?.data.data} ))
    // .catch(err => console.log(err))

    Promise.all([searchArtist, searchTrack])
      .then(data => {
        const [searchArtist, searchTrack] = data
        res.render("discover/discover-music", {searchArtist, searchTrack})
      })
      .catch(err => console.log(err))
})



//SEARCH BY TRACK
router.post("/music", (req, res, next) => {
  const {track} = req.body

  deezerApi.searchByTrack(track)
    .then(searchedTrack => res.render("discover/discover-music", {tracks: searchedTrack?.data} ))
    .catch(err => console.log(err))
})



//CHOSEN ALBUM

router.get("/music/:id", (req, res, next) => {
  const { id } = req.params

  deezerApi.getAlbumTracks(id)
  /* .then(album => console.log(album)) */
  .then(album => {
    console.log(album.data.tracks.data)
    res.render("discover/chosen-album", album.data )
  })
  .catch(err => console.log(err))
}
)




module.exports = router;
