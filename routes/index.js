module.exports = app => {

  // Base URLS
  app.use('/', require('./base.routes.js'))
  app.use('/discover', require('./discover.routes.js'))
  app.use('/djsession', require('./djsession.routes.js'))
  app.use('/profile', require('./profile.routes.js'))
  app.use('/radio', require('./radio.routes.js'))
  app.use('/', require('./auth.routes.js'))
  
}