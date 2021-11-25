module.exports = {
    isLoggedIn: (req, res, next) => {
      req.session.currentUser ? next() : res.render("auth/login-page", { errorMessage: "Log in to get access" })
    },
  
  
    checkRoles: (...roles) => (req, res, next) => {
      roles.includes(req.session.currentUser.role) ? next() : res.status(401).render("auth/login-page", { errorMessage: "Admin rights required" })
    },

    checkMine: (userId) => (req, res, next) => {
      req.session.currentUser._id == userId ? next() : res.redirect('/')
    }
}