const router = require("express").Router();

//HOME
router.get("/", (req, res, next) => {
  res.render("index");
});


//DASHBOARD
router.get("/dashboard", (req, res) => {
  res.render("dashboard/dashboard-main")
})

module.exports = router;
