const redis = require('redis')
const client = redis.createClient(process.env.PORT_REDIS)
const helper = require('../helpers/helpers')
module.exports = {
  cacheGetAllProduct: (req, res, next) => {
    client.get('getallproduct', (err, data) => {
      if (err) throw err
      if (data !== null) {
        helper.response(res, JSON.parse(data), 200)
      } else {
        next()
      }
    })
  },
  clearGetAllProduct: (req, res, next) => {
    client.del('getallproduct')
    next()
  },
}
