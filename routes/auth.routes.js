const router = require("express").Router();
const User = require("../models/User.model")
const bcrypt = require("bcrypt")


//RENDER SIGNUP PAGE
router.get("/signup", (req, res) => {
    res.render("auth/sign-up-page")
})



//CREATE USER
router.post("/signup", (req, res) => {

    const { username, name, email, pwd } = req.body
  
    //Comprobamos si existe usuario
    User.find({ username })
      .then(user => {
  
        //Si existe devolvemos error
        if (user.length) {
          res.render("auth/sign-up-page", { errorMessage: "Usuario ya existente." })
        } else {
  
          //Si no generamos el salt...
          const bcryptSalt = 10
          const salt = bcrypt.genSaltSync(bcryptSalt)
          //Y encriptamos la contraseña
          const hashPass = bcrypt.hashSync(pwd, salt)
  
          User.create({ username, name, email, password: hashPass }) 
            .then(createdUser => res.redirect("/login"))
            .catch(err => console.log(err))
        }
  
      })
  
  })




//RENDER LOGIN PAGE
router.get("/login", (req, res) => {
    res.render("auth/login-page")
})



router.post("/login", (req, res) => {

  const { username, pwd } = req.body

  //Buscamos si existe el usuario
  User.findOne({ username })
    .then(user => {

      //Si el usuario no existe enviamos error
      if (!user) {
        res.render('auth/login-page', { errorMessage: 'Usuario no reconocido' })
        return
      }

      //Si la contraseña no coincide con el hash enviamos error
      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.render('auth/login-page', { errorMessage: 'Contraseña incorrecta' })
        return
      }

      //5. Enganchar el objeto de usuario al req.session
      req.session.currentUser = user
      req.app.locals.currentUser = user
      res.redirect("/dashboard")
    })
    .catch(err => console.log(err))
})





//LOG OUT

router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'))
  req.app.locals.currentUser = undefined
})


module.exports = router;