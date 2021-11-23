const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")

//DJ SESSION
router.get("/", isLoggedIn, (req, res, next) => {
  res.render("mix/dj-controller-main", req.session.currentUser)
});

module.exports = router;
