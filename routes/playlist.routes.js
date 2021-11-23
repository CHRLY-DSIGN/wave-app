const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const Playlist = require("../models/Playlist.model")


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




module.exports = router;