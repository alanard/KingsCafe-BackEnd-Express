const historiesModels = require('../models/histories')

const helpers = require('../helpers/helpers')

const histories = {
  getAllHistories: (req, res) => {
    historiesModels
      .getAllHistories()
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
    const { invoice, cashier, date, orders, amount } = req.body
    const data = {
      invoice,
      cashier,
      date,
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
