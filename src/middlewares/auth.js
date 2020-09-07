const jwt = require('jsonwebtoken')
const helpers = require('../helpers/helpers')

module.exports = {
  verifyAccess: (req, res, next) => {
    if (!req.headers.authorization) {
      const message = 'Server Need Token!'
      return helpers.response(res, message, 401, null)
    }
    let token = req.headers.authorization
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        if (err.name === "JsonWebTokenError") {
          const message = 'Invalid Token'
          return helpers.response(res, message, 401, null)
        } else if (err.name === "TokenExpiredError") {
          const message = 'Token Expired'
          return helpers.response(res, message, 401, null)
        }
      }
      next()
    })
  },
}
