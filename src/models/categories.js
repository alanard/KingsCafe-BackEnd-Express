const connection = require('../configs/db')

const categories = {
  getAllCategories: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM category', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getCategoriesById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM category WHERE id = ? ',
        id,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  getCategoriesByName: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM category WHERE name = ? ',
        name,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  insertCategories: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO category SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateCategories: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE category SET ? WHERE id = ?',
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  },

  deleteCategories: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM category WHERE id = ?',
        id,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        }
      )
    })
  }
}

module.exports = categories
