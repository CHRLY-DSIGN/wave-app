const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")

//HOME

router.get("/", isLoggedIn, (req, res, next) => {
  res.render("profile/user-profile-main", req.session.currentUser)
});



//VISIT OTHER PROFILES
router.get("/:id", (req, res, next) => {
  
  const {id} = req.params
  const user = User.findById(id)
  const playlist = Playlist.find()
  
  //TODO create a middleware / util to show only this user's playlists

  /* let playlistOwner = playlist.populate("owner")
  if (playlistOwner === user) {

  } */

  Promise.all([user, playlist])
    .then(data => {
      const [user, playlist] = data
      res.render("profile/user-profile-visit", {user, playlist})
    })
    .catch(err => console.log(err))
});




module.exports = router;
