const categoriesModels = require('../models/categories')

const helpers = require('../helpers/helpers')

// Import redis
const redis = require('redis')
// const client = redis.createClient(process.env.PORT_REDIS)

const categories = {
  getAllCategories: (req, res) => {
    categoriesModels
      .getAllCategories()
      .then((result) => {
        // client.setex('getallcategories', 60 * 60 * 12, JSON.stringify(result))
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getCategoriesById: (req, res) => {
    const id = req.params.id
    categoriesModels
      .getCategoriesById(id)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getCategoriesByName: (req, res) => {
    const name = req.query.name
    categoriesModels
      .getCategoriesByName(name)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  insertCategories: (req, res) => {
    const { name, description } = req.body

    const data = {
      name,
      description,
    }

    categoriesModels
      .insertCategories(data)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  updateCategories: (req, res) => {
    const id = req.params.id
    const { nameCategory, description } = req.body

    const data = {
      nameCategory,
      description,
    }

    categoriesModels
      .updateCategories(id, data)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  deleteCategories: (req, res) => {
    const id = req.params.id
    categoriesModels
      .deleteCategories(id)
      .then((result) => {
        helpers.response(res, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

module.exports = categories
