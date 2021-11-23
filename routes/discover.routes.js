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
router.post("/music"), (req, res, next) => {
  const {artist} = req.body

  deezerApi.searchByArtist(artist)
    .then(searchedArtist => console.log(searchedArtist))
    .catch(err => console.log(err))
}

//TODO fix the search by artist functionality





module.exports = router;
