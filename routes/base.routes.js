const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")

//HOME
router.get("/", (req, res, next) => {
  res.render("index");
});


//DASHBOARD
router.get("/dashboard", isLoggedIn, (req, res, next) => {
  res.render("dashboard/dashboard-main", req.session.currentUser)
});

module.exports = router;
