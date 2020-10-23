const connection = require('../configs/db')

const histories = {
  getAllHistories: (orderby, sort) => {
    return new Promise((resolve, reject) => {
      if ((orderby, sort)) {
          connection.query(`SELECT * FROM history ORDER BY ${orderby} ${sort}`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      } else {
        connection.query(`SELECT * FROM history`, (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
      }
    })
  },
  getDateHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT SUM(amount) as amountDate , DATE(date) as date FROM history WHERE date >= CURRENT_DATE() GROUP BY DATE(date)`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getMonthHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT SUM(amount) as amountMonth, DATE(date) as date FROM history WHERE date between DATE_FORMAT(CURDATE() ,'%Y-%m-01') AND CURDATE()`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getYearHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(`select SUM(amount) as amountYear, DATE(date) as date from history WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getHistoriesById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history WHERE id = ? ',
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

  insertHistories: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO history SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  updateHistories: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE history SET ? WHERE id = ?',
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

  deleteHistories: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM history WHERE id = ?',
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

module.exports = histories
