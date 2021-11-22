const router = require("express").Router();

//HOME
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
