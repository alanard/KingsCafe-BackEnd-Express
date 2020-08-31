const connection = require('../configs/db')

const users = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (result) {
          if (data !== result) {
            resolve(result)
          } else {
            console.log('data sudah ada')
          }
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE email = ?',
        email,
        (err, res) => {
          if (!err) {
            resolve(res)
          } else {
            reject(new Error(err))
          }
        },
      )
    })
  },
}

module.exports = users
