const router = require("express").Router();
const { isLoggedIn, checkRoles } = require("../middlewares")
const User = require("../models/User.model")
const APIHandler = require("../public/js/APIHandler")
const deezerApi = new APIHandler('https://api.deezer.com');


//RADIO
router.get("/", (req, res, next) => {
  
  
  deezerApi.radioFunction()
    .then()
    .catch()
});

module.exports = router;
