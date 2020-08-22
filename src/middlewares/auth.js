const jwt = require('jsonwebtoken')
const helpers = require('../helpers/helpers')

module.exports = {
  verifyAccess: (req, res, next) => {
    let token = req.headers.authorization
    token = token.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        const message = 'Invalid Token'
        helpers.response(res, message, 403, null)
      } else {
        next()
      }
    })
  },
}
