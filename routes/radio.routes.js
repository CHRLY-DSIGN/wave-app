const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")

//RADIO
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("radio/radio-main", req.session.currentUser)
});

module.exports = router;
