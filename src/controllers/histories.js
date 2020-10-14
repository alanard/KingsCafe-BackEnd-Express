const historiesModels = require('../models/histories')

const helpers = require('../helpers/helpers')

const histories = {
  getAllHistories: (req, res) => {
    const orderby = req.query.orderby
    const sort = req.query.sort
    const promise1 = historiesModels.getAllHistories(orderby, sort)
    const promise2 = historiesModels.getDateHistory()
    const promise3 = historiesModels.getMonthHistory()
    const promise4 = historiesModels.getYearHistory()
    Promise.all([promise1, promise2, promise3, promise4])
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getHistoriesById: (req, res) => {
    const id = req.params.id
    historiesModels
      .getHistoriesById(id)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertHistories: (req, res) => {
    const { invoice, cashier, orders, amount } = req.body
    const data = {
      invoice,
      cashier,
      date: new Date(),
      orders,
      amount
    }

    historiesModels
      .insertHistories(data)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateHistories: (req, res) => {
    const id = req.params.id
    const { invoice, cashier, date, orders, amount } = req.body

    const data = {
      invoice,
      cashier,
      date,
      orders,
      amount
    }

    historiesModels
      .updateHistories(id, data)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  deleteHistories: (req, res) => {
    const id = req.params.id
    historiesModels
      .deleteHistories(id)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = histories
